// time server over TCP

var net = require('net');
var port = Number(process.argv[2]);
var server = net.createServer(function (socket) {
  socket.end(now() + '\n');
});

function zeroPad (i) {
  var pad = (i < 10) ? '0' : '';
  return pad + i;
}

function now () {
  var d = new Date()
  return d.getFullYear() + '-' +
    zeroPad(d.getMonth() + 1) + '-' +
    zeroPad(d.getDate()) + ' ' +
    zeroPad(d.getHours()) + ':' +
    zeroPad(d.getMinutes());
}

server.listen(port);
