
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.send('Hello Az Bytes')
})

app.get('/about', (req, res) => {
    return res.send(`Hello ${req.query.name}`)
})

app.get('/contact', (req, res) => {
    return res.send('Hello Contact')
})



// const myServer = http.createServer(app)

// myServer.listen(8001, () => {
//     console.log('Server Running on Port: 8001')
// })


app.listen(8001, () => {
    console.log('Server Running on Port: 8001')
})