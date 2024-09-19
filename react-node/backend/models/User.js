const mongoose = require('mongoose')


const UserSchema = mongoose.Schema({
    username:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        unique: true,
        require: true,
    },
    password:{
        type: String,
        require: true,
    }
})

const UserModel = mongoose.model('UserModel', UserSchema)


module.exports = UserModel