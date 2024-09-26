const express = require('express')
const { registerHandler, loginHandler } = require('../controllers/AuthController')
const { registerValidation, loginValidation } = require('../middlewares/AuthValidation')

const router = express.Router()



router.post('/register', registerValidation, registerHandler)
router.post('/login', loginValidation, loginHandler)


module.exports = router