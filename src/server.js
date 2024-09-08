const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.end("hey");
  } 
  else if(req.url == "/about"){
    res.end("about")
  }
  else {
    res.end("Hello world");
  }
  
});
server.listen(3000);
console.log("server is running on port 3000");
