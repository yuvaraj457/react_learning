require('dotenv').config()
const express = require('express')


const app = express()
const indexRouter = require('./routes')
const jwt = require('express-jwt')

const cookieParser = require('cookie-parser')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(cookieParser())

app.use(jwt({
     secret : process.env.Token_Secret , 
     algorithms : ['HS256'], 
     getToken : req => req.cookies.token
    }).unless({path : ['/login']}))

app.use('/',indexRouter)

app.listen(5000, console.log('server started..'))

module.exports = app