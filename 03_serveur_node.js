var http = require("http"); //IMPORTE LE MODULE SERVEUR HTTP

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Hello World</h1>");
  response.write("<p>HELLO DANKNESS MY OLD FRIEND</p>");
  response.end();
}).listen(8888);