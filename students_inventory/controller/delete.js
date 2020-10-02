module.exports = (del,knex,verification)=>{
    del.put('/login/del/:email', verification, (req, res)=>{
        knex('users_details').where('Email', req.params.email).del()
        .then(data=>{
            console.log("data has deleted");
            res.send("your data has deleted successfully");
        }).catch(err=>{
            console.log(err);
            res.send(err);
        })
    })
}