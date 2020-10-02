// const jwt = require('jsonwebtoken');
// var jwt = require('jsonwebtoken')


// module.exports = (req,res,next)=>{
//     token : req.headers.authorization;
    
//     jwt.verify(token,"secretKey",function(err,data){
//         if(!err){
//             if(data == req.body.email){
//                 next()
//             }
//             else{
//                 res.send("please check your email")
//             }
//         }
//         else{
//             console.log("please login again ")
//         }
//     });
// }