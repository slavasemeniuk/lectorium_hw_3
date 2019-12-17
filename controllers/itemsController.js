const fs = require('fs').promises
const uuidv1 = require('uuid/v1');

module.exports.create = (req, res, next) => {
  let item = req.body
  item.identifier = uuidv1().toString()
  fs.writeFile(`./storage/${item.identifier}`, JSON.stringify(item))
    .then((data) => {
      res.status(200).send(item)
    }).catch(next)
}

module.exports.index = (req, res, next) => {
  transormToResponse(req.params.id)
    .then((item) => {
      res.status(200).send(item)
    }).catch(next)
}

module.exports.get = (req, res, next) => {
  fs.readdir('./storage')
    .then((files) => {
      return Promise.all(files.map(transormToResponse))
    }).then((items) => {
      res.status(200).send(items)
    }).catch(next)
}

module.exports.delete = (req, res, next) => {
  fs.unlink(`./storage/${req.params.id}`)
    .then(() => {
      res.status(200).send()
    }).catch(next)
}

function transormToResponse(fileName) {
  return fs.readFile(`./storage/${fileName}`).then((data) => {
    return JSON.parse(data)
  })
}
