DESAFÍO ENTREGABLE - PROCESO DE TESTING: Servidores con express

Desarrollar un servidor basado en express donde podamos hacer consultas a nuestro archivo de productos.

Se instalarán las dependencias a partir del comando npm install
    npm i nodemon -D
    npm i express

Se echará a andar el servidor
    npm run dev

Se revisará que el archivo YA CUENTE CON AL MENOS DIEZ PRODUCTOS CREADOS al momento de su entrega, es importante para que los tutores no tengan que crear los productos por sí mismos, y así agilizar el proceso de tu evaluación.
    productos.json

Se corroborará que el servidor esté corriendo en el puerto 8080.
    const PORT = 8080;

    miapp.listen(PORT, () => {
        console.log(`Server on port ${PORT}`)})

    http://localhost:8080/

Se mandará a llamar desde el navegador a la url http://localhost:8080/products sin query, eso debe devolver todos los 10 productos.

Se mandará a llamar desde el navegador a la url http://localhost:8080/products?limit=5 , eso debe devolver sólo los primeros 5 de los 10 productos.

Se mandará a llamar desde el navegador a la url http://localhost:8080/products/2, eso debe devolver sólo el producto con id=2.

Se mandará a llamar desde el navegador a la url http://localhost:8080/products/34123123, al no existir el id del producto, debe devolver un objeto con un error indicando que el producto no existe.