const Menu = require('./menu')
const _ = require('lodash')

Menu.methods(['get','post','put','delete'])
Menu.updateOptions({ new:true, runValidators:true })

Menu.after('post', sendErrors).after('put', sendErrors)

function sendErrors(req, res, next){
    const bundle = res.locals.bundle

    if(bundle.errors){
        var errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    } else {
        next()
    }
}

function parseErrors(nodeErrors){
    const errors = []
    _.forIn(nodeErrors, error => errors.push(error.message))
    return errors

}

module.exports = Menu