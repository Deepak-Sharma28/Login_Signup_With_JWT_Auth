module.exports = (login, knex , jwt)=>{
    login.put('/login',(req , res)=>{
        knex.select('UserName','Password').from('users_details').where('UserName',req.body.username)
        .then(data=>{
            if(data.length !=0){              
               const token =  jwt.sign(req.body.email, "secretKey")
               res.json({msg : "---------You have logged in successfully---", token:token})
               console.log({msg : "---------You have logged in successfully---", token:token});
            }else{
                res.send("Your password or username is wrong or you are not our user")
                console.log("Your password or username is wrong or you are not our user");
            }
        }).catch(err=>{
            res.send(err);
            console.log(err);
        })
    })
}
