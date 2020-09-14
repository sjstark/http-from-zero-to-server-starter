const http = require('http');

const server = http.createServer(function(req, res) {
    if (req.url === '/OK'){
    console.log("Inbound 'OK' request being processed...");
    res.writeHead(200);
    res.end();
    }
    else if (req.url === '/Bad-Request'){
    console.log("Error 400: Bad request");
    res.writeHead(400);
    res.end();
    }
    else if (req.url === '/Created'){
    console.log("Error 201: Request succeeded and created");
    res.writeHead(201);
    res.end();
    }
    else if (req.url === '/Forbidden'){
    console.log("You're not authorized");
    res.writeHead(403);
    res.end();
    }
    else if (req.url === '/Found'){
    console.log("Resource has been changed temporarily, redirected");
    res.writeHead(302);
    res.end();
    }
    else if (req.url === '/Gateway-Timeout'){
    console.log("Server cannot get response in time");
    res.writeHead(504);
    res.end();
    }
    else if (req.url === '/Internal-Server-Error'){
    console.log("Server has encountered a situation");
    res.writeHead(500);
    res.end();
    }
    else if (req.url === '/Moved-Permanently'){
    console.log("Requested resource is no longer there, redirected");
    res.writeHead(301);
    res.end();
    }
    else if (req.url === '/Unauthorized'){
    console.log("You are not authorized to view requested resource");
    res.writeHead(401);
    res.end();
    }
    else {
        res.writeHead(404);
        console.log("404 Error: Not Found");
        res.end();
    }
}).listen(3000, function(){
    console.log("Listening for requests in port 3000");
});
