//
//
const express = require('express')
const path = require('path')
const CF = require('./config/default')
const cors = require('cors')

const app = express()

app.use(cors())

// parse json request body
app.use(express.json())

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }))

// API
app.use(CF.server.apiPath, require('./api/index'))

//client and express app are coming from the same server
const frontEndPath = path.join(__dirname, CF.frontEnd.path)
app.use(express.static(frontEndPath))
app.get('/', function(req, res) {
    res.sendFile('index.html',  { root: frontEndPath } )
})


module.exports = app
