const restful = require('node-restful')
const mongoose = restful.mongoose
const Schema = mongoose.Schema;

const statusSchema = new mongoose.Schema({
    status: { type:String, default:'active',
        enum: ['active', 'inactive'] 
    }
})

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    photo: {type: String, required: true},
    category : {type: Schema.ObjectId, ref: 'Category', required:true},
    quantity : {type: Number, default: 0},
    price: {type: Number, default: 0},
    description: { type: String },
    status: {
        type: String, default: 'active',
        enum: ['active', 'inactive']
    }
})

// const productSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     photo: { type: String, required: true },
//     category: { type: [categorySchema], validate: [function (value) { return value.length > 0; }, " '{PATH}' is required!"] },
//     description: { type: String },
//     status: {
//         type: String, default: 'active',
//         enum: ['active', 'inactive']
//     }
// })

module.exports = restful.model('Product', productSchema)

