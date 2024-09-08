const http = require("http");

const server = http.createServer(function (req, res) {

 
  if (req.url === '/notfound') {
    res.writeHead(404, { 'Content-Type': 'text/plain'   });
    res.end('Page not found');
  }
  
  else if (req.url == "/") {
     res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'hey' }));
  } 
  else if(req.url == "/about"){
     res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'how'}))
  }
  else {
     res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'hushar' }));
  }
  
});
server.listen(3000);
console.log("server is running on port 3000");
