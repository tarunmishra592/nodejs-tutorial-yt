const mongoose = require('mongoose')


const ProductSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    category:{
        type: String,
        require: true,
    },
    price:{
        type: Number,
        require: true,
    }
})

const ProductModel = mongoose.model('ProductModel', ProductSchema)

module.exports = ProductModel