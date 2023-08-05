import {promises as fs} from 'fs'

class ProductManager {
  constructor(path) {
    this.path = path;
    this.products = [];
    this.id = 1;
  }

  async addProducts({
    title,
    description,
    price,
    thumbnail,
    code,
    stock,
    id })
    {
    id = this.id;
    const verificarCode = this.products.some((product) => {
      return product.code === code;
    });
    if (verificarCode) {
      console.log("El código está repetido");
    } else if (
        title != "" &&
        description != "" &&
        price != "" &&
        thumbnail != "" &&
        stock != "" &&
        code != "" && 
        title != undefined &&
        description != undefined &&
        price != undefined &&
        thumbnail != undefined &&
        stock != undefined &&
        code != undefined
    ) {
      try {
        console.log("Producto OK!");
        this.products.push({
          title,
          description,
          price,
          thumbnail,
          code,
          stock,
          id,
        } );
        this.id = this.id + 1;

        await fs.writeFile(this.path, JSON.stringify(this.products));
      } catch (error) {
        console.log("Error!", error);
      }} 
      else {
      console.log("Faltan campos para completar");
    }}

  async getProducts() {
    try {
      this.products = JSON.parse(await fs.readFile(this.path, "utf-8")
      )
      ;
      console.log(this.products)
    } catch (error) {
      console.log(error);
    }}

  getProductById = async (id) => {
    this.products = JSON.parse(await fs.readFile(this.path, "utf-8"));
    const resultadoId = this.products.find((e) => e.id === id);
    if (resultadoId) {
      return console.log(resultadoId);
    } else {
      return console.log("Not found");
    } };

  updateProduct = async (id, data) => {
    try {
      let productoAActualizar = await this.getProductById(id)
      let productoIndex = this.products.findIndex(e => e.id === id);
		  this.products[productoIndex] = { ...productoAActualizar, ...data, id:id};
		  await fs.writeFile(this.path, JSON.stringify(this.products));
      console.log("Producto editado OK!")
    }
    catch (error) {
      console.log("Error al actualizar", error)
    }}

  deleteProduct = async(id) => {
    try{
    this.products = JSON.parse(await fs.readFile(this.path, 'utf-8'));
	    this.products = this.products.filter(prod => prod.id !== id);
    await fs.writeFile(this.path, JSON.stringify(this.products));
  }
  catch(error) {
    console.log("Error al eliminar", error)
  }}}

