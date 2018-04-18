const restful = require('node-restful')
const mongoose = restful.mongoose
const Schema = mongoose.Schema;

// const productSchema = new mongoose.Schema({
//     name: {type: String, required: true},
//     category : {type: Schema.ObjectId, ref: 'Category', required:true}
// })

const statusSchema = new mongoose.Schema({
    status: { type:String, default:'active',
        enum: ['active', 'inactive'] 
    }
})

const iconSchema = new mongoose.Schema({
    name: { type: String, required: true },
    font: { type: String, required: true }
})

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    icon: { type: [iconSchema], validate: [function (value) { return value.length > 0; }, " '{PATH}' is required!"] },
    status: {
        type: String, default: 'active',
        enum: ['active', 'inactive']
    }
})

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    photo: { type: String, required: true },
    category: { type: [categorySchema], validate: [function (value) { return value.length > 0; }, " '{PATH}' is required!"] },
    description: { type: String },
    status: {
        type: String, default: 'active',
        enum: ['active', 'inactive']
    }
})

const Product = restful.model('Product', productSchema)
const Category = restful.model('Category', categorySchema)

module.exports = {
    Product: Product,
    Category: Category
}
