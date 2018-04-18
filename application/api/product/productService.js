const Schema = require('./product')
const Product = Schema.Product

Product.methods(['get','post','put','delete'])
Product.updateOptions({ new:true, runValidators:true })

module.exports = Product