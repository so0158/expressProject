const http = require('http');

const server = http.createServer((req, res) => {
res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
res.write('<h1>Node.js로 서버만들기</h1>');
res.end('<p>헤헤</p>');
})
.listen(8080);

/* Listening Event Listener */
server.on('listening', () => {
    console.log('8080포트에 서버 연결중~~~');
});

/* Error Event Listener */
server.on('error', () => { 
    console.log(error);
});
