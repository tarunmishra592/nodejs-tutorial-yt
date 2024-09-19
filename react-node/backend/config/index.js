const mongoose = require('mongoose')

const URL = process.env.MONGO_DB_URL

mongoose.connect(URL).then(() => {
    console.log('DB Connected')
}).catch((err) => {
    console.log('MongoDB connection err', err)
})