const express = require('express')
const app = express()

app.set('port', process.env.PORT || 8080)

//app.use(express.static(__dirname+))