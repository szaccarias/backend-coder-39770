backend-coder-39770 - Repositorio de entregas alumno Zaccarias Sebastián - Coderhouse 2023

La clase ProductManager tiene multiples metodos para poder adicionar, obtener, actualizar y eliminar productos:

Metodo addProduct agrega un producto a la lista de productos del archivo, si esta misma ya tiene productos, le asigna un nuevo ID y luego arroja la lista actualizada.

Metodo getProducts devuelve una lista con todos los productos guardados y en caso de que no haya productos arroja: “Not found” En caso de error arroja el mensaje: “getProducts: error”

Metodo updateProduct recibe un id y un objeto data con las propiedades a modificar del producto y si no coincide arroja: “Not found”. Si tiene exito arroja el mensaje: “updateProduct: done”. Si da error arroja el mensaje: “updateProduct: error”

Metodo getProductById recibe como parámetro el id del producto y arroja un objeto con todas las propiedades del producto. Si no coincide arroja: “Not found”. Si da error arroja el mensaje: “getProductById: error”

Metodo updateProduct actualiza los datos de un producto de la lista de productos, en caso de coincidencia devuelve actualizada la lista y si el mismo no se encuentra devuelve un mensaje que informa que el producto no se encontró.

Metodo deleteProduct recibe como parámetro el id del producto y elimina el mismo del archivo, en caso de no coincidir arroja: “Not found”. Si tiene éxito arroja el mensaje: “deleteProduct: done” y actualiza la lista en el archivo. Si da error arroja el mensaje: “deleteProduct: error”

La clase CartManager tiene los sig. metodos:

Metodo addCart: agrega un cart al array de carts en el archivo.

Metodo getCarts: devuelve el array con los carts guardados en el archivo.

Metodo getCartsById: recibe como parametro el id y devuelve el carrito con el id correspondiente.

Servidor:

Para levantar el server se debera ejecutar en la terminal: "npm dev run"

Endpoints:

/api/products : GET: muestra los productos PUT: crea un nuevo producto

/api/products/:pid : GET: toma el id ingresado como params y muestra el producto con esa id PUT: modifica el producto con la id ingresada con el objeto recibido del body DEL: elimina el carrito

/api/carts : GET: muestra los carritos PUT: crea un nuevo carrito

/api/carts/:cid : GET: toma el id ingresado como params y muestra el carrito con esa id

/api/carts/:cid/product/:pid/:units : PUT: agrega n unidades (:units) al producto con id :pid, en el carrito con id :cid DEL: resta n unidades (:units) al producto con id :pid, en el carrito con id :cid

TEST: El archivo script.js crea una base de datos con archivos locales de productos y carts. Primero ejecutar el script.js para crear los archivos y luego ejecutar "npm run dev" en la terminal para levantar el server. Despues de esto ingresar desde el navegador a localhost:8080/(endpoints) para ver resultados.

