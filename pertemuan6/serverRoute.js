const http = require('http');
const port = 8080;

http.createServer((req,res) =>{
    res.writeHead(200);
    if(req.url == '/'){
        res.write('<h2>anda berada pada halaman index</h2>');
    }
    else if(req.url == '/siswa'){
        res.write('<html><body><h2>anda berada pada halaman siswa</h2></body></html>');
    }
    else if(req.url == '/dosen'){
        res.write('<html><body><h2>anda berada pada halaman dosen</h2></body></html>');
    }
    else if(req.url == '/admin'){
        res.write('<html><body><h2>anda berada pada halaman admin</h2></body></html>');
    }
    else{
        res.write('<html><body><h2>page not found</h2></body></html>');
    }
    res.end();
}).listen(port,() =>{
    console.log(`server is listening on port ${port}`);
});
