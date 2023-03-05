const Ajv = require('ajv')
const ajv = new Ajv()

module.exports.newPetValidation = ajv.compile({
  type: 'object',
  properties: {
    name: { type: 'string' },
    type: { type: 'string', enum: ['dog', 'cat'] },
    breed: { type: 'string' },
    status: { type: 'string', enum: ['adoption', 'foster', 'available'] },
    size: { type: 'string', enum: ['xs', 's', 'm', 'l', 'xl'] },
    color: { type: 'string' },
    bio: { type: 'string' },
    hypoallergenic: { type: 'boolean' },
    dietaryRestrictions: { type: 'string' }
  },
  required: ['name', 'type', 'size'],
  additionalProperties: false
})
