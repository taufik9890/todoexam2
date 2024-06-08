const express = require('express')
const route = express.Router()
const authRoute = require('./auth')
const todoRoute = require('./todo')

route.use('/auth', authRoute)
route.use('/todo', todoRoute)


module.exports = route
