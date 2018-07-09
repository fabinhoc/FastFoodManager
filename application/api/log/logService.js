const Log = require('./log')
const _ = require('lodash')

Log.methods(['get','post'])
Log.updateOptions({ new:true, runValidators:true })

module.exports = Log