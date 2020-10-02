module.exports = knex = require('knex')({
    client : 'mysql',
    connection : {
        host : "localhost",
        user: "root",
        database :"students_inventory",
        password : "Deepak_123"
    }
})


