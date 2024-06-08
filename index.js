require('dotenv').config()
const express = require('express')
const app = express()
const Router = require('./routes/index')
const mongoConfig = require('./config/mongoConfig')

app.use(express.json())

mongoConfig()

app.use('/', Router)





const port = process.env.Port || 8000

app.listen(port, ()=>{
    console.log('Port Running');
})