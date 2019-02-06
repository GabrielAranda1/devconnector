const isEmpty = require('./is-empty')
const Validator = require('validator')

module.exports = function validatePostInput(data) {
    let errors = {}

    // if name is not empty keep it, else make it an empty string 
    data.text = !isEmpty(data.text) ? data.text : ''

    if (Validator.isEmpty(data.text)) {
        errors.text = 'Text field is required'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
} 