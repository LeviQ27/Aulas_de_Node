const http = require('http');

const host = '127.0.0.1';
const port = '3000';
const url = `http://${host}:${port}`;

const server = http.createServer((req, resp) => {
    resp.statusCode = 200;
    resp.setHeader('Content-Type', 'text/html');
    resp.end('<h1>Ola professor!</br>Aprendi sobre como montar um server local com apis externas e rotas</h1>');
});

server.listen(port, host, ()=>{
    console.log(`Server: ${url} is running...`);
});