const express = require('express')
require('dotenv').config()
require('./config')

const AuthRoutes = require('./routes/AuthRoutes')
const ProductRoutes = require('./routes/ProductRoutes')


const app = express()


// Middleware
app.use(express.json())

// 18 - Middleware

// Routes
app.use('/auth', AuthRoutes)
app.use('/product', ProductRoutes)



app.listen(8001, () => {
    console.log('Server Running on Port: 8001')
})