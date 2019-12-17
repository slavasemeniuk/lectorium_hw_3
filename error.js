class HTTPError extends Error {
  constructor (message = 'Invalid Request', status = 400, name = null) {
    super(message)
    this.name = name
    this.status = status
  }

  toJSON() {
    return {
      status: this.status,
      message: this.message
    }
  }
}

module.exports = HTTPError
