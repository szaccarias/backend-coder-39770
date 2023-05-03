import express from 'express'
import ProductManager from './ProductManager.js'
import CartManager from './CartManager.js'
let p_manager = new ProductManager('./data/products.json')
let c_manager = new CartManager('./data/carts.json')


let server = express()
let PORT = 8080
let ready = () => console.log("server ready on port: " +PORT)
server.listen(PORT, ready)
server.use(express.urlencoded({ extended: true }))

let index_route = '/'
let index_function = (req, res) => {
    return res.send('Welcome to my Index')
}
server.get(index_route, index_function)


let products_route = '/api/products'
let products_function = (req, res) => {
    let limit = req.query.limit ?? p_manager.getProducts().length
    let products = p_manager.getProducts().slice(0, limit)
    if (products.length > 0) {
        return res.send({
            succes: true,
            products
        })
    } else {
        return res.send({
            succes: false,
            products: 'not found'
        })
    }
}
server.get(products_route, products_function)


let productById_route = '/api/products/:pid'
let productById_function = (req, res) => {
    let id = Number(req.params.pid)
    let one = p_manager.getProductById(id)
    if (one != 'Not Found'){
        return res.send({
            succes: 'true',
            response: one
        })
    } else{
        return res.send({
            succes: 'false',
            response: {}
        })
    }

}
server.get(productById_route, productById_function)


let carts_route = '/api/carts'
let carts_function = (req, res) => {
    let carts = c_manager.getCarts()
    if (carts.length > 0) {
        return res.send({
            succes: true,
            carts
        })
    } else {
        return res.send({
            succes: false,
            products: 'not found'
        })
    }
}
server.get(carts_route, carts_function)


let cartById_route = '/api/carts/:cid'
let cartById_function = (req, res) => {
    let id = Number(req.params.cid)
    let one = c_manager.getCartById(id)
    if (one != 'Not Found'){
        return res.send({
            succes: 'true',
            response: one
        })
    } else{
        return res.send({
            succes: 'false',
            response: {}
        })
    }

}
server.get(cartById_route, cartById_function)
