const express = require('express')
const { productValidation } = require('../middlewares/ProductValidation')
const { productCreateHandler } = require('../controllers/ProductController')
const { checkUserToken } = require('../middlewares/Auth')


const router = express.Router()


router.post('/create', checkUserToken, productValidation, productCreateHandler)


module.exports = router