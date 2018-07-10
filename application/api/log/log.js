const restful = require('node-restful')
const mongoose = restful.mongoose
const Schema = mongoose.Schema;

const logSchema = new mongoose.Schema({
    reference: {type: String, required: true},
    action: {type: String, required: true},
    element: {type: Schema.ObjectId},
    message: {type: String, required: true},
    icon : {type: String}
})

module.exports = restful.model('Log', logSchema)