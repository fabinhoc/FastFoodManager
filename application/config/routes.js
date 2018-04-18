const express = require('express')

module.exports = function(server){

    // API ROUTES
    const router = express.Router()
    server.use('/api', router)

    router.route('/teste').get(function(req, res, next){
        res.send('funcionou')
    })

    // ROTAS DA API
    const productService = require('../api/product/productService')
    productService.register(router, '/products')

    const categoryService = require('../api/product/categoryService')
    categoryService.register(router, '/categories')
}   