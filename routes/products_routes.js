import {Router} from 'express';
import ProductManager from '../ProductManager.js'
let manager = new ProductManager('./products.json')

const router = Router()

let products_route = '/'
let products_function = async (req, res) => {
    let limit = req.query.limit ?? await manager.getProducts().length
    let products = (await manager.getProducts()).slice(0, limit)
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
router.get(products_route, products_function)


let productById_route = '/:pid'
let productById_function = (req, res) => {
    let id = Number(req.params.pid)
    let one = manager.getProductById(id)
    if (one) {
        return res.send({
            succes: 'true',
            response: one
        })
    } else {
        return res.send({
            succes: 'false',
            response: {}
        })
    }

}
router.get(productById_route, productById_function)


router.post(
    '/',
    async (req, res) => {
        try {
            let title = req.body.title ?? null
            let description = req.body.description ?? null
            let price = req.body.price ?? null
            let thumbnail = req.body.thumbnail ?? null
            let stock = req.body.stock ?? null
            if (title && description && price && thumbnail && stock) {
                let product = await manager.addProduct({ title, description, price, thumbnail, stock })
                return res.json({
                    status: 201,
                    product: product.id,
                    response: 'created!'
                })
            } else {
                return res.json({
                    status: 400,
                    response: 'check data!'
                })
            }
        } catch (error) {
            console.log(error)
            return res.json({
                status: 500,
                response: 'error'
            })
        }
    }
)


router.put(
    '/:pid',
    async (req, res) => {
        try {
            if (req.body && req.params.pid) {
                let id = Number(req.params.pid)
                let data = req.body
                let product = await manager.updateProduct(id, data)
                if (product){
                    return res.json({
                        status: 200,
                        product_id: product.id,
                        response: 'product updated'
                    })
                } else {
                    return res.json({
                        status: 400,
                        response: 'check data'
                    })
                }   
            } else {
                return res.json({
                    status: 400,
                    response: 'check data'
                })
            }
        } catch (error) {
            console.log(error)
            return res.json({
                status: 500,
                response: 'error'
            })
        }

    }
)


router.delete(
    '/:pid',
    async (req, res) => {
        try {
            await manager.deleteProduct(Number(req.params.pid))
            return res.json({
                status: 200,
                response: 'product deleted'
            })
        } catch(error) {
            console.log(error)
            return res.json({
                status: 500,
                response: 'error'
            })
        }
    }
)

export default router