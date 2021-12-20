require('dotenv').config()
const express = require('express')
const jwt = require('express-jwt')
const cors = require('cors')

const app = express()
const indexRouter = require('./routes')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())

app.use(jwt({
    secret : process.env.Token_Secret,
    algorithms : ['HS256'],
    getToken : req => req.cookies.token
}).unless({path : ['/login', '/logout']}))

app.use('/',indexRouter)

app.listen(5000, console.log('server started'))

module.exports = app