# backend-coder-39770 - Repositorio de entregas alumno Zaccarias Sebastián - Coderhouse 2023

La clase ProductManager se modifico para que gestione un conjunto de productos de un archivo

La clase recibe como parámetro la ruta donde se creará el archivo y el constructor incluye esta ruta en la variable this.path

addProduct agrega un producto al arreglo de productos del archivo. Todos los campos son obligatorios menos: id que debe agregarse automáticamente y autoincrementable stock es opcional ya que si el usuario no lo envía debe ser cero. En caso de éxito se devuelve el id del producto En caso de error se devuelve un mensaje que dice: “addProduct: error”

getProducts devuelve el arreglo con todos los productos guardados en el archivo y en caso de que no haya productos arroja: “Not found” En caso de error arroja el mensaje: “getProducts: error”

updateProduct recibe un id y un objeto data con las propiedades a modificar del producto y si no coincide arroja: “Not found”. Si tiene exito arroja el mensaje: “updateProduct: done”. Si da error arroja el mensaje: “updateProduct: error”

getProductById recibe como parámetro el id del producto y arroja un objeto con todas las propiedades del producto. Si no coincide arroja: “Not found”. Si da error arroja el mensaje: “getProductById: error”

deleteProduct recibe como parámetro el id del producto y elimina el mismo del archivo, en caso de no coincidir arroja: “Not found”. Si tiene éxito arroja el mensaje: “deleteProduct: done”. Si da error arroja el mensaje: “deleteProduct: error”

TEST: Ejecutar el script.js.
