module.exports = (update,knex,verification)=>{
    update.put("/login/update/:email",verification ,(req, res)=>{
        knex.select('Email',"UserName","Password","Mobile_no").from('users_details').where("Email", req.params.email)
        .then(data=>{
            if(data.length !=0){
                if(data[0].Password == req.body.confirm_password){
                    knex('users_details')
                    .update({
                        FirstName : req.body.firstName,
                        LastName : req.body.lastname,
                        Mobile_no : req.body.mobile_no,
                        Age : req.body.age
                    }).where("Email", req.params.email)
                    .then(resp =>{
                        res.send("your detaills has successfully updated");
                        console.log("your details has successfully updated");
                    })
                    .catch(err=>{
                        console.log(err);
                        res.send(err)
                    })
                }else{
                    res.send("check your password again");
                    console.log("check your password again");
                } 
            }else{
                res.send("go and signup first")
            }
        }).catch(err=>{
            res.send(err)
            console.log(err);
        })

    })
}