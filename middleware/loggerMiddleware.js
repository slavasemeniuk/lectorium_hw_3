const fs = require('fs')

const logPath = './logs'

module.exports = (req, res, next) => {
  let str = 'URL: ' + req.path + '\n' + 'Method: ' + req.method + '\n' + 'Date: ' + Date().toString() + '\n\n'
  fs.appendFile(logPath, str, function (err) {})
  next()
}