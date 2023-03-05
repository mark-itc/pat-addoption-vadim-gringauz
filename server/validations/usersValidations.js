const Ajv = require('ajv');
const ajv = new Ajv();

module.exports.signUpValidation = ajv.compile({
    type: 'object',
    properties: {
        email: { type: 'string' },
        password: { type: 'string' },
        passwordVerify: { type: 'string' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        phone: { type: 'string' }
    },
    required: ['email', 'password'],
    additionalProperties: false
})


module.exports.signInValidation = ajv.compile({
    type: 'object',
    properties: {
        email: { type: 'string' },
        password: { type: 'string' }
    },
    required: ['email', 'password'],
    additionalProperties: false
})

module.exports.updateValidation = ajv.compile({
    type: 'object',
    properties: {
        email: { type: 'string' },
        password: { type: 'string' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        phone: { type: 'string' }
    },
    required: [],
    additionalProperties: false
})