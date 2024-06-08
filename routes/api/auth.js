const express = require('express')
const registrationController = require('../../controllers/registrationController')
const secureApi = require('../../middleware/secureApi')
const otpVerificationController = require('../../controllers/otpVerificationController')
const loginController = require('../../controllers/loginController')
const route = express.Router()

route.post('/registration', registrationController)
route.post('/otpverification', otpVerificationController)
route.post('/login', loginController)



module.exports = route


