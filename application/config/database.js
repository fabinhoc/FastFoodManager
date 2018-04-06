const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_fastfoodmanager')

mongoose.Error.messages.general.required = "The atribute '{PATH}' is required"