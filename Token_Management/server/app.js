const express = require('express')
const cors = require('cors')

const app = express()
const indexRouter = require('./routes')

app.use(cors({origin : "http://localhost:3000"}))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter)



app.listen(5000,() => console.log("Server Started..."));

module.exports = app;