var http = require('http');
var port = 3000;


http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from the Testing database server\n');
}).listen(port);

console.log('Testing-db listening on port', port);
