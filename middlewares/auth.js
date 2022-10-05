const jwt = require('jsonwebtoken')
const secretKey= "KeyBoardWarrior"
const db = require('../models')


function authentication (req,res,next){
    const access_token = req.headers.access_token
    console.log(access_token,'masuk authen')
    try{
        // const decoded = jwt.verify(access_token,secretKey)
        // req.userData = decoded
        next()
    }
    catch(err){
        next(err)
    }
}

module.exports={authentication}
