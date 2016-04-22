// read a file from a command line argument, print out the contents

var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
var lines = buffer.toString().split('\n').length - 1;

console.log(lines);
