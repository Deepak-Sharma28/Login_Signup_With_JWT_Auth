const express = require('express')

const Router = express.Router()

const cookieParser = require('cookie-parser')

const jwt = require('jsonwebtoken');

const knex = require('./model/connection')

const verification = require('./controller/auth')

require('./controller/update')(Router, knex, verification)

require('./controller/signup')(Router,knex);

require('./controller/login')(Router,knex,jwt);

require('./controller/delete')(Router, knex , verification)

module.exports = Router

