const http = require('http');

const server = http.createServer(function(req, res) {
    if (req.url === '/OK'){
    console.log("Inbound 'OK' request being processed...");
    res.writeHead(200);
    res.end();
    } else {
        res.writeHead(404);
        console.log("404 Error");
        res.end();
    }
}).listen(3000, function(){
    console.log("Listening for requests in port 3000");
});