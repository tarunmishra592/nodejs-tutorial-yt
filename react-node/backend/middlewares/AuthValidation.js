const joi = require('joi')


const registerValidation = (req, res, next) => {
    const schema = joi.object({
        username: joi.string().min(3).max(10).required(),
        email: joi.string().email().required(),
        password: joi.string().min(4).max(10).required()
    })

    const { error } = schema.validate(req.body)
    if(error){
        return res.status(400).json({ status: false, message: 'Bad Request' })
    }

    next()
}

const loginValidation = (req, res, next) => {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(4).max(10).required()
    })

    const { error } = schema.validate(req.body)
    if(error){
        return res.status(400).json({ status: false, message: 'Bad Request' })
    }

    next()
}


module.exports = {
    registerValidation,
    loginValidation
}