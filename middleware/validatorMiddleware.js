const HTTPError = require('../error')

class InvalidRequestError extends HTTPError {
  constructor (errors, message = 'Invalid request data') {
    super(message)
    this.errors = errors
    this.name = 'InvalidRequest'
  }
}

module.exports = (validate) => {
  return (req, res, next) => {
    if (!validate(req.body)) {
      next(new InvalidRequestError(validate.errors))
      return
    }
    next()
  }
}

module.exports.InvalidRequestError = InvalidRequestError
