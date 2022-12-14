const uuid = require('uuid')
const path = require('path')
const {Product, ProductInfo} = require('../models/models.js')
const ApiError = require('../error/ApiError.js')

class ProductController {
    async create (req, res, next) {
        try {
            let {name, price, catalogType, author, year, amount, genre} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg';
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const product = await Product.create({name, price, catalogType,author,year,amount,genre, img: fileName})

            return res.json(product)
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll (req, res) {
        let {catalogType, limit, page} = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit
        let products
        if (!catalogType) {
            products = await Product.findAndCountAll({limit, offset})
        }
        if(catalogType == 'vinyl'){
            products = await Product.findAndCountAll({where: {catalogType: 'vinyl'}, limit, offset})
        }
        if(catalogType == 'players'){
            products = await Product.findAndCountAll({where: {catalogType: 'players'}, limit, offset})
        }

        return res.json(products)
    }

    async getOne (req, res) {
        const {id} = req.params
        const product = await Product.findOne(
            {
                where:{id},
                include:[{model: ProductInfo, as: 'info'}]
            },
        )
        return res.json(product)
    }
}

module.exports = new ProductController()   