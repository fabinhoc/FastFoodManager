const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true, limit: '500mb' }))
server.use(bodyParser.json({ limit: '500mb', extended: true }))
server.use(allowCors)

server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}`)
})

module.exports = server
