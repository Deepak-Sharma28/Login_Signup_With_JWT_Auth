module.exports = (signup,knex) =>{
    signup.post('/Signup',(req,res)=>{
        knex.select('username').from('users_details').where('username',req.body.username)
        .then(data=>{
            if(data.length == 0){
                console.log(data);
                knex('users_details').insert({
                    UserName : req.body.username,
                    FirstName : req.body.firstname,
                    LastName : req.body.lastname,
                    Email : req.body.email,
                    Password : req.body.password,
                    Mobile_no : req.body.mobile_no,
                    Age: req.body.age
                }).then(resp=>{
                    res.send("you have successfully signed in");
                    console.log("you have successfully signed in");
                }).catch(err=>{
                    res.send(err);
                    console.log(err);
                })
            }
            else{
                console.log(data);
                res.send("You have already signed in");
                console.log("You have already signed in");
            }
        }).catch(err=>{
            res.send(err);
            console.log(err);
        })
    })
}