const http = require('http')

http.createServer((req, res) =>{ 
    console.log(req.url)
    console.log(req.method)
    //console.log(res)
}).listen(8080, () => {
    console.log('8080 연결 쑝~')
})