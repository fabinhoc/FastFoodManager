const restful = require('node-restful')
const mongoose = restful.mongoose
const Schema = mongoose.Schema;

const statusSchema = new mongoose.Schema({
    status: { type:String, default:'active',
        enum: ['active', 'inactive'] 
    }
})

const menuSchema = new mongoose.Schema({
    name: {type: String, required: true},
    photo: {type: String},
    description: { type: String },
    status: {
        type: String, default: 'active',
        enum: ['active', 'inactive']
    },
    updatedAt: {type: Date, default: Date.now}
})


module.exports = restful.model('Menu', menuSchema)

