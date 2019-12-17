const express = require('express')
const controller = require('../controllers/itemsController')
const validate = require('../validators/itemsValidator')
const validatorMiddleware = require('../middleware/validatorMiddleware')
const router = express.Router()

router.get('/items', controller.get)
router.post('/items', validatorMiddleware(validate), controller.create)
router.delete('/items/:id', controller.delete)
router.get('/items/:id', controller.index)

module.exports = router;