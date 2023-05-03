import fs from 'fs'

class CartManager {

    constructor(path) {
        this.carts = []
        this.path = path
        this.init(path)
    }

    init(path) {
        let file = fs.existsSync(this.path)
        if (!file) {
            fs.writeFileSync(path, '[]')
            console.log('file created at path: ' + path)
            return 'file created at path: ' + path
        } else {
            this.carts = JSON.parse(fs.readFileSync(path, 'UTF-8'))
            console.log('data recovered')
            return 'data recovered'
        }
    }

    async addCart(products) {
        try {
            let id
            if (this.carts.length === 0) {
                id = 1
            } else {
                id = this.carts[this.carts.length - 1].id + 1
            }
            let cart = {id,products}
            this.carts.push(cart)
            let carts_json = JSON.stringify(this.carts, null, 2)
            await fs.promises.writeFile(this.path, carts_json)
            console.log('cart id: ' + cart.id)
            return 'cart id: ' + cart.id
        }
        catch (err) {
            console.log('addCart: error')
            return 'addCart: error'
        }
    }

    getCarts() {
        try {
            if (this.carts.length === 0) {
                console.log('Not found')
                return this.carts
            }
            return this.carts
        }
        catch (err) {
            console.log('getCarts: error')
            return 'getCarts: error'
        }

    }

    getCartById(id) {
        try {
            let cart = this.carts.find(c => c.id === id)
            cart = cart ?? 'Not Found'
            return cart
        }
        catch (err) {
            console.log('getCartById: error')
            return 'getCartById: error'
        }

    }
}


export default CartManager