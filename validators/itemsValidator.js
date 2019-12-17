const ajv = require('ajv')()

const itemSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['name'],
}

module.exports = ajv.compile(itemSchema)
