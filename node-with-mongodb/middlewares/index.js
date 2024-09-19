const fs = require('fs')


const serverLog = (req, res, next) => {
    const logData = `\nDate: ${Date.now()} Method: ${req.method} Url: ${req.path}`
    fs.appendFile('server-log.txt', logData, (err, data) => {
        next()
    })
}

module.exports = {
    serverLog,
}