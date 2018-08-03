const restful = require('node-restful')
const mongoose = restful.mongoose
const Schema = mongoose.Schema;

const itemSchema = new mongoose.Schema({
    name: {type: String, required: true},
    quantity : {type: Number, default: 0},
    price: {type: Number, default: 0},
    stock: {type: Boolean, default: false},
    description: { type: String },
})

module.exports = restful.model('Item', itemSchema)

