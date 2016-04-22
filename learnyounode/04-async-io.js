// read a file from a command line argument, print out the contents using an asynchronous callback

var fs = require('fs');

fs.readFile(process.argv[2], function(err, data) {
  if (err) return;

  var lines = data.toString().split('\n').length - 1;
  console.log(lines);
});
