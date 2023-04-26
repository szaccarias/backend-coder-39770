const fs = require('fs')

class ProductManager {

    constructor(path) {
        this.products = []
        this.path = path  
        this.init(path)

    }

    init(path) {
        let file = fs.existsSync(path)        
        if (!file) {            
            fs.writeFileSync(path,'[]')
            console.log('file created at path: '+this.path)
            return 'file created at path: '+this.path
        } else {            
            this.products = JSON.parse(fs.readFileSync(path,'UTF-8'))
            console.log('data recovered')
            return 'data recovered'
        }
    }
    async addProduct({ title, description, price, thumbnail, code, stock }) {
        stock = stock ?? 0
        try {            
            let data = { title, description, price, thumbnail, code, stock }            
            if (this.products.length>0) {                
                let next_id = this.products[this.products.length-1].id+1                
                data.id = next_id
            } else {                
                data.id = 1
            }            
            this.products.push(data)            
            let data_json = JSON.stringify(this.products,null,2)            
            await fs.promises.writeFile(this.path,data_json)
            console.log('id´s created product: '+data.id)
            return 'id´s user: '+data.id
        } catch(error) {
            console.log(error)
            return 'error: addProduct error'
        }
    }
    getProducts() {
        console.log(this.products)
        return this.products
    }

    getProductById(product_id) {
        let one = this.products.find(each=> each.id === product_id)
        if (one) {
            console.log(one)
            return one
        }
        console.log('not found')
        return null
    }
    
    async updateProduct(id,data) {        
        try {            
            let one = this.getProductById(id)            
            for (let prop in data) {                
                one[prop] = data[prop]
            }            
            let data_json = JSON.stringify(this.products,null,2)            
            await fs.promises.writeFile(this.path,data_json)
            console.log('updateProduct done: '+id)
            return 'updateProduct done '+id
        } catch(error) {
            console.log(error)
            return 'updateProduct error'
        }
    }
    async deleteProduct(id) {
        try {            
            this.products = this.products.filter(each=>each.id!==id)            
            let data_json = JSON.stringify(this.products,null,2)            
            await fs.promises.writeFile(this.path,data_json)
            console.log('deleteProduct done: '+id)
            return 'deleteProduct done: '+id
        } catch(error) {
            console.log(error)
            return 'deleteProduct error'
        }
    }
}

async function manager() {

    let manager = new ProductManager('./data/data.json')

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

    await manager.getProductById(9)

    await manager.updateProduct(9,{ title:'Product Changed' })

    await manager.deleteProduct(10)

    await manager.getProducts()
}

manager()