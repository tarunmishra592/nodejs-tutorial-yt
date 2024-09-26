const express = require('express')
const cookieParser = require('cookie-parser')
const path = require('path')
const multer  = require('multer')
require('dotenv').config()
require('./config')

const AuthRoutes = require('./routes/AuthRoutes')
const ProductRoutes = require('./routes/ProductRoutes')

const app = express()

const multerStore = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({storage: multerStore })


// Middleware
app.use(express.json())
app.use(cookieParser())


// View Engine
app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))



app.get('/', (req, res) => {
    res.render('home')
})

app.post('/file-upload', upload.fields([{name: 'profile_pic1'}, {name: 'profile_pic2'}]), (req, res) => {
    console.log(req.file)

    res.redirect('/')
})



app.get('/hello', (req, res) => {
    console.log(req.cookies.test)
    res.cookie('test', 'aslkfjlasdkfj8383838373839', {
        domain: 'www.google.com'
    })
    return res.status(200).json({message: 'Hello Az Bytes'})
})



// Routes
app.use('/auth', AuthRoutes)
app.use('/product', ProductRoutes)


app.listen(8001, () => {
    console.log('Server Running on Port: 8001')
})