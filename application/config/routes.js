const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'assets/' })
const fs = require('fs')
const base64ToImage = require('base64-to-image')



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

    const categoryService = require('../api/category/categoryService')
    categoryService.register(router, '/categories')

    router.post('/save/image/base64', upload.single('avatar'), function(req, res, next){

        let base64Str = req.body.base64
        let path = 'assets/'
        let mime = base64Str.match(/([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+)/);
        mime = mime[0].split("/");
        let options = {fileName: req.body.name, type: mime[1]}

        try {
            var imageinfo = base64ToImage(base64Str, path, options)
            return res.json({imageinfo})
        } catch(err){
            return res.json({ error: true, message: 'An error has occurred' })
        }
        
    })

    router.route('/assets/:image').get(function(req, res, next){
        res.sendFile(process.cwd() + "\/assets\/" + req.params.image)
    })

}   