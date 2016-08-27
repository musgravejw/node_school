var async = require('async');
var http = require('http');

async.each(
  [
    process.argv[2],
    process.argv[3]
  ],
  function (url, done) {
    http.get(url, function (res) {
      res.on('data', function(chunk){
      });

      res.on('end', function(chunk){
        done(null);
      });
    }).on('error', function(err){
      done(err);
    });
  },
  function (err) {
    if (err) console.log(err);
  }
);
