// import a filter function, and print the results

var filter = require('./filter.js');
var dirName = process.argv[2];
var extFilter = process.argv[3];

filter(dirName, extFilter, function(err, list) {
  if (err) return console.error(err)

  list.forEach(function(file) {
    console.log(file);
  });
});
