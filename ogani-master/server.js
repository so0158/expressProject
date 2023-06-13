const express = require('express')
const app = express()
const port = 8080

app.set('/', (req, res) => {
    res.send('Hello')
})

app.listen(port, () => {
    console.log('성공~')
})