const validator = require('./validatorMiddleware')

module.exports = (err, req, res, next) => {
  if (!err instanceof validator.InvalidRequestError) {
    next(err)
    return
  }
  let response = err.toJSON()
  let suberrors = err.errors

  response.messages = suberrors.map((suberror) => { return suberror.message })
  res.status(400).send(response)
}