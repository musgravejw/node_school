// filter files by their extension, export this function using a module

var fs = require('fs');
var path = require('path');

var filter = function(dirName, extFilter, callback) {
  fs.readdir(dirName, function(err, list) {
    if (err) return callback(err)

    list = list.filter(function (file) {
      return path.extname(file) === '.'+extFilter
    });

    callback(null, list);
  });
}

module.exports = filter;
