const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
    },
    email:{
        type:String,
        require: true,
        unique: true
    },
    mobile:{
        type: String,
        require: true,
    },
    message:{
        type: String,
        require: true
    }
})

const Users = mongoose.model('users', userSchema)


module.exports = Users