const express = reqire('expreses')
const app = express()

app.use(function(err, req, res, next){
    console.log(err.stack)
    res.status(500).send('something broken!!')
})

app.listen(8080)