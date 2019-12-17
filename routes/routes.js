
const express = require('express')
const router = express.Router()

const itemsRouter = require('./itemsRoute')

module.exports = [itemsRouter]