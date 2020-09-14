const http = require('http');

const server = http.createServer(function(req, res) {
    if (req.url === '/OK'){
    console.log("Inbound 'OK' request being processed...");
    res.writeHead(200);
    res.write('<h1>Okay! you hit the webpage</h1>')
    res.end();
    }
    else if (req.url === '/Bad-Request'){
    console.log("Error 400: Bad request");
    res.writeHead(400);
    res.write('<h1>bad request</h1>')
    res.end();
    }
    else if (req.url === '/Created') {
        if (req.method === 'POST') {
            console.log("Error 201: Request succeeded and created");
            res.writeHead(201);
            res.write('<h1>request success and created!</h1>')
            res.end();
        } else {
            console.log("Error 405: Method not allowed!");
            res.writeHead(405);
            res.write('<h1>Method not allowed!</h1>')
            res.end();
        }
    }
    else if (req.url === '/Forbidden'){
    console.log("You're not authorized");
    res.writeHead(403);
    res.write('<h1>you shall not pass!</h1>')
    res.end();
    }
    else if (req.url === '/Found'){
    console.log("Resource has been changed temporarily, redirected");
    res.writeHead(302, {"Location": "./OK"});
    res.write('<h1>Your princess is in another castle</h1>')
    res.end();
    }
    else if (req.url === '/Gateway-Timeout'){
    console.log("Server cannot get response in time");
    res.writeHead(504);
    res.write('<h1>Go to the corner and take a timeout</h1>')
    res.end();
    }
    else if (req.url === '/Internal-Server-Error'){
    console.log("Server has encountered a situation");
    res.writeHead(500);
    res.write('<h1>Error! Error! but only on the server</h1>')
    res.end();
    }
    else if (req.url === '/Moved-Permanently'){
    console.log("Requested resource is no longer there, redirected");
    res.writeHead(301);
    res.write('<h1>We moved</h1>')
    res.end();
    }
    else if (req.url === '/Unauthorized'){
    console.log("You are not authorized to view requested resource");
    res.writeHead(401);
    res.write('<h1>Get authorized fool</h1>')
    res.end();
    }
    else {
        res.writeHead(404);
        console.log("404 Error: Not Found");
        res.write('<h1>What are you even looking for?</h1>')
        res.end();
    }
}).listen(3000, function(){
    console.log("Listening for requests in port 3000");
});
