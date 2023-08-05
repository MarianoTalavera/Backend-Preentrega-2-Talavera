DESAFÍO ENTREGABLE - PROCESO DE TESTING: Manejo de archivos

Se creará una instancia de la clase “ProductManager”
    const administrarProductos = new ProductManager("productos.json");

Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
    administrarProductos.getProducts()

Se llamará al método “addProduct” con los campos: title: “producto prueba” description:”Este es un producto prueba” price:200, thumbnail:”Sin imagen” code:”abc123”, stock:25
    administrarProductos.addProducts({
        title: "producto prueba",
        description: "Este es un producto prueba",
        price: 200,
        thumbnail: "Sin imagen",
        code: "abc123",
        stock: 25,
});

El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE

Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado

Se llamará al método “getProductById” y se corroborará que devuelva el producto con el id especificado, en caso de no existir, debe arrojar un error.
    administrarProductos.getProductById(1)

Se llamará al método “updateProduct” y se intentará cambiar un campo de algún producto, se evaluará que no se elimine el id y que sí se haya hecho la actualización.
    const productUpdated = {
        title: "producto Updated",
        description: "producto Updated",
        price: 300,
        thumbnail: "Sin imagen",
        code: "abc123",
        stock: 30,
    }


    administrarProductos.updateProduct(1, productUpdated)

Se llamará al método “deleteProduct”, se evaluará que realmente se elimine el producto o que arroje un error en caso de no existir.
    administrarProductos.deleteProduct(1, productUpdated)