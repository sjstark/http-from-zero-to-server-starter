const http = require('http');

const server = http.createServer(function(req, res) {
    res.end();
}).listen(3000, function(){
    console.log("Listening for requests in port 3000");
});