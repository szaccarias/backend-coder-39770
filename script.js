import ProductManager from './ProductManager.js'
import CartManager from './CartManager.js'

async function p_manager() {
    let manager = new ProductManager('./data/products.json')
    await manager.addProduct({ title: 'product 1', description: 'This is a test product', price: 250, thumbnail: 'With image', code:'abc-001', stock: 9 })
    await manager.addProduct({ title: 'product 2', description: 'This is another product', price: 325, thumbnail: 'With image', code:'abc-002', stock: 13 })
    await manager.addProduct({ title: 'product 3', description: 'This is a product', price: 80, thumbnail: 'Without image', code:'abc-003', stock: 25 })
    await manager.addProduct({ title: 'product 4', description: 'This is a product', price: 60, thumbnail: 'Without image', code:'abc-004', stock:17 })
    await manager.addProduct({ title: 'product 5', description: 'This is a product', price: 15, thumbnail: 'With image', code:'abc-005', stock: 44 })
    await manager.addProduct({ title: 'product 6', description: 'This is a test product', price: 30, thumbnail: 'Without image', code:'abc-006', stock: 10 })
    await manager.addProduct({ title: 'product 7', description: 'This is another product', price: 55, thumbnail: 'Without image', code:'abc-007', stock: 20 })
    await manager.addProduct({ title: 'product 8', description: 'This is a test product', price: 120, thumbnail: 'With image', code:'abc-008', stock: 8 })
    await manager.addProduct({ title: 'product 9', description: 'This is a product', price: 130, thumbnail: 'Without image', code:'abc-009', stock: 33})
    await manager.addProduct({ title: 'product 10', description: 'This is a product', price: 50, thumbnail: 'Without image', code:'abc-010', stock: 15 })
    console.log(manager.getProductById(9))
    await manager.updateProduct(9, { title: 'Product Changed' })
    await manager.deleteProduct(10)
    await manager.getProducts()
}

async function c_manager() {
    let manager = new CartManager('./data/carts.json')
    await manager.addCart([{id:2, units:3}, {id:5, units:1}])
    await manager.addCart([{id:1, units:6}, {id:3, units:4}])
    await manager.addCart([{id:8, units:4}, {id:5, units:1}])
    await manager.addCart([{id:9, units:6}, {id:7, units:2}])
    console.log(manager.getCartById(2))
    await manager.getCarts()
}

p_manager()
c_manager()

