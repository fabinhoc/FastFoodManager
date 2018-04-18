const Schema = require('./product')
const Category = Schema.Category

Category.methods(['get', 'post', 'put', 'delete'])
Category.updateOptions({ new: true, runValidators: true })

module.exports = Category