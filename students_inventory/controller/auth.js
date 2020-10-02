var jwt = require('jsonwebtoken')

module.exports = (req , res , next)=>{
    var token = req.headers["authorization"];
    // console.log(token)
    jwt.verify(token , "secretKey" , (err , data)=>{
        if(!err){
            if(data == req.body.email){
                next()
            }
            else{
                res.send("check your email")
            }
        }
        else{
            res.send(err)
            console.log(err);
        }
    })
}