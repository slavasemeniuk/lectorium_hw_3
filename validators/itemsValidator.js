const ajv = require('ajv')()

const itemSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 2,
      maxLength: 64
    },
    age: {
      type: 'number',
      exclusiveMinimum: 0
    }
  },
  additionalProperties: false,
  required: ['name'],
}

module.exports = ajv.compile(itemSchema)
