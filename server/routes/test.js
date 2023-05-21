const express = require('express')
const { printHello } = require('../controller/test/print_hello')
const { printBye } = require('../controller/test/print_bye')
const route = express.Router()

route.get('/', printHello)
route.get('/hi', printHello)
route.get('/bye', printBye)

module.exports = route
