// file server over HTTP

var http = require('http');
var fs = require('fs');
var port = Number(process.argv[2]);
var fileLocation = process.argv[3];

var server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'content-type': 'text/plain'
  });

  fs.createReadStream(fileLocation).pipe(res);
})

server.listen(port);
