
const jwt = require('jsonwebtoken')
const UserModal = require('../models/User')


const registerHandler = async(req, res) => {
    try{
        const { username, email, password } = req.body;
        if(!username || !email || !password){
            return res.status(400).json({ status: false, message: 'Bad request' })
        }

        const userModal = new UserModal({ username, email, password })

        await userModal.save()

        return res.status(201).json({ status: true, message: "Register Success" })

    }catch(e){
        return res.status(500).json({status: false, message: "Internal Server Error"})
    }
}

const loginHandler = async(req, res) => {
    try{
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({ status: false, message: 'Bad request' })
        }

        const User = await UserModal.findOne({email})

        if(!User){
            return res.status(400).json({ status: false, message: 'User Not Found' })
        }

        const jwtToken = jwt.sign({ username: User.username, email: User.email, _id: User._id }, process.env.JWT_SECRET)
       
        res.status(200).json({
                    success: true, 
                    result: {
                        user:User, 
                        token: jwtToken
                    } 
                })

    }catch(e){
        res.status(500).json({status: false, message: "Internal Server Error"})
    }
}


module.exports = {
    registerHandler,
    loginHandler
}