const Category = require('./category')

Category.methods(['get', 'post', 'put', 'delete'])
Category.updateOptions({ new: true, runValidators: true })

module.exports = Category