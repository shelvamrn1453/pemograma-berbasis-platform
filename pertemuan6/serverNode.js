const http = require('http');
const port = 8000;

const server = http.createServer((req, res) =>{
    res.writeHead(200);
    res.write('<body><h2>selamat datang di web server node.js</h2></body>');
    res.end();
})

server.listen(port, () =>{
    console.log(`server is listening on port ${port}`);
})