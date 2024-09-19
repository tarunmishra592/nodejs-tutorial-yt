const mongoose = require('mongoose')

const ConnectMongoDB = async (url) => {
    return mongoose.connect(url)
}

module.exports = {
    ConnectMongoDB
}