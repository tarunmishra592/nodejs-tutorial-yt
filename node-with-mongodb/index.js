const express = require('express')
const path = require('path')
require('dotenv').config()

const Users = require('./models/users')

const userRouter = require('./routes/user')

// Modules
const { ConnectMongoDB } = require('./config')
const { serverLog } = require('./middlewares')

const app = express()

// DB Connection
ConnectMongoDB(process.env.DB_URL)


// Template Engine
app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))


// Middleware
app.use(express.json())
app.use(serverLog)

// Routes
app.use('/api/users', userRouter)


app.get('/show-users', async (req, res) => {
    const allUsers = await Users.find({})
    return res.render('allusers', {
        users: allUsers
    })
})


app.listen(8001, () => {
    console.log('Server Running on Port: 8001')
})