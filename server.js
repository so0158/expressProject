const express = require('express')
// import express from 'express'
const http = require('http')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.set('port', process.env.PORT || 8080)
app.use('css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/js')))
//app.use('/cssasdasd', express.static(path.join(__dirname, '/public/cssasdasd')))
//app.use('/img', express.static(path.join(__dirname, '/public/img')))

app.listen(8080, () => {
    console.log('성공~')
})