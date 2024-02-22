require('dotenv').config()

const express = require('express')
const cors = require('cors')
const router = require('./routes/router')
require('./db/connection')

const bodyParser = require('body-parser');

const Server = express()

Server.use(cors())
// use json parser in server
Server.use(bodyParser.urlencoded({ extended: true }));
Server.use(express.json())

Server.use(router)



// Setup port number to listen server
const port = 4000 || process.env.PORT

// run or listen server app
Server.listen(port,()=>{
    console.log(`Backend server started at port no:${port}`);
})





// get request
Server.get("/",(req,res)=>{
    res.status(200).send(`<h1>Application server started</h1>`)
})