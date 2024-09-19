const jwt = require('jsonwebtoken')


const checkUserToken = (req, res, next) => {
    const auth = req.headers['authorization']
    console.log(auth)
    if(!auth){
        return res.status(401).json({status: false, message: 'Unauthorized'})
    }

    try{
        const decode = jwt.verify(auth, process.env.JWT_SECRET)
        req.user = decode
        next()
    }catch(err){
        return res.status(401).json({status: false, message: 'Unauthorized'}) 
    }
}

module.exports = {
    checkUserToken
}