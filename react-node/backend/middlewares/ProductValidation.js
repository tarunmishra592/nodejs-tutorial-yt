const joi = require('joi')


const productValidation = (req, res, next) => {
    const schema = joi.object({
        name: joi.string().min(3).max(100).required(),
        category: joi.string().min(3).max(100).required(),
        price: joi.string().min(1).max(10).required()
    })

    const {error} = schema.validate(req.body)
    console.log(error)
    if(error){
        return res.status(400).json({ status: false, message: 'Bad Request' })
    }

    next()
}

module.exports = {
    productValidation
}