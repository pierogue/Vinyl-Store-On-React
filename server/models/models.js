const sequelize = require('../db.js')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique:true},
    password: {type: DataTypes.STRING, },
    role: {type: DataTypes.STRING, defaultValue:"USER" },

})

const Basket = sequelize.define('basket', {
    id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    // userId: {type: DataTypes.INTEGER}
})

const BasketProduct = sequelize.define('basket_product', {
    id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    // basketId: {type: DataTypes.INTEGER},
    // productId: {type:DataTypes.INTEGER}
})

const Product = sequelize.define('product', {
    id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique:true, allowNull:false},
    price: {type: DataTypes.INTEGER, allowNull:false},
    img: {type: DataTypes.STRING, allowNull:false},
    catalogType: {type:DataTypes.STRING, allowNull: false},
    author: {type: DataTypes.STRING, allowNull: true},
    year: {type: DataTypes.INTEGER, allowNull: true},
    genre: {type: DataTypes.STRING, allowNull: true},
    amount: {type: DataTypes.INTEGER, allowNull: false},
})

// const ProductInfo = sequelize.define('product_info', {
//     id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
//     title: {type: DataTypes.STRING},
//     description: {type: DataTypes.STRING},
//     // productId: {type: DataTypes.INTEGER},
// })

// const Catalog = sequelize.define('catalog', {
//     id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
//     // productId: {type: DataTypes.INTEGER, unique:true},
//     // catalogTypeId: {type: DataTypes.INTEGER}
// })

// const CatalogType = sequelize.define('catalog_type', {
//     id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
//     typeName: {type: DataTypes.STRING,unique}
// })

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product)

// Product.hasMany(ProductInfo, {as: 'info'});
// ProductInfo.belongsTo(Product)

BasketProduct.hasOne(Product);
Product.belongsTo(BasketProduct)

module.exports = {
    User, 
    Basket,
    BasketProduct,
    Product,
    // ProductInfo,
}