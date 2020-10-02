var knex = require('./connection')

knex.schema.hasTable('users_details').then((exists)=>{
    if(!exists){
       return knex.schema.createTable('users_details',(t)=>{
            t.increments('id').primary();
            t.string('UserName');
            t.string('FirstName');
            t.string('LastName');
            t.string('Email');
            t.string('Password');
            t.bigInteger('Mobile_no');
            t.integer('Age')
        })
    }
    else{
        console.log("table is already exists:)");
    }
}).catch(err=>{
    console.log(err);
}) 