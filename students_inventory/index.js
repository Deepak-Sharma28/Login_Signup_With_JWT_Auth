var express = require('express');

var app = express()

app.use(express.json())

var Router = require('./routers')
app.use('/', Router)
// signup(Router,knex)

const Port = 3080;

app.listen(Port , ()=>{
    console.log("server has started");
});
