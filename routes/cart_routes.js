import {Router} from 'express';
import CartManager from '../CartManager.js'
let c_manager = new CartManager('./carts.json')

const router = Router()

let carts_route = '/'
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
router.get(carts_route, carts_function)


let cartById_route = '/:cid'
let cartById_function = (req, res) => {
    let id = Number(req.params.cid)
    let one = c_manager.getCartById(id)
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
router.get(cartById_route, cartById_function)



router.post(
    '/',
    async (req, res) => {
        try {
            let cart = await c_manager.addCart([])
            return res.json({
                status: 201,
                cart: cart.id,
                response: 'created!'
            })
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
    '/:cid/product/:pid/:units',
    async (req, res) => {
        try{
            if (req.body && req.params.cid && req.params.pid && req.params.units){
                let cid = Number(req.params.cid)
                let data = {
                    id: Number(req.params.pid),
                    units: Number(req.params.units)
                }
                await c_manager.updateCart(cid, data)
                return res.json({
                    status: 200,
                    cid,
                    response: 'cart updated'
                })
            }
        } catch(error) {
            console.log(error)
            return res.json({
                status: 500,
                response: 'error'
            })
        }
    }
)



router.delete(
    '/:cid/product/:pid/:units',
    async (req, res) => {
        try {
            if (req.body && req.params.cid && req.params.pid && req.params.units){
                let cid = Number(req.params.cid)
                let data = {
                    id: Number(req.params.pid),
                    units: -Number(req.params.units)
                }
                await c_manager.updateCart(cid, data)
                return res.json({
                    status: 200,
                    cid,
                    response: 'cart updated'
                })
            }
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