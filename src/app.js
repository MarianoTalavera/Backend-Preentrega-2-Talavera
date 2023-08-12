import express from "express";
import { ProductManager } from "../src/ProductManager.js"

const PORT = 8080;
const miapp = express();
const productManager = new ProductManager('./productos.json');

miapp.use(express.json())

const prods = productManager.getProducts()

miapp.get('/', (req, res) => {
    res.send("Comenzamos a trabajar")
})

miapp.get('/products', async (req, res) => {
    let findprods = await prods
    const {limit} = req.query
    if(limit) {
        const prod = findprods.slice(0, limit)
        res.send(prod)
    } else {
        res.send(await findprods)
    }})

miapp.get('/products/:pid', async (req, res) => {
    let findprods = await prods
    const prod = findprods.find(prod => prod.pid === parseInt(req.params.pid))
    if(prod) {
        res.send(prod)
    } else {
        res.send("404. No existe el producto")
    }})

miapp.listen(PORT, () => {
console.log(`Server on port ${PORT}`)
})