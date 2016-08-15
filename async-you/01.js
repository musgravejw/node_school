var http = require('http');
var fs = require('fs');
var async = require('async');

async.waterfall([
  function (done) {
    fs. readFile(process.argv[2], function (err, contents) {
      if (err) return done(err);
      done(null, contents);
    });
  },
  function (data, done) {
    var body = '';

    http.get(data.toString().trimRight(), function(res){
      res.on('data', function(chunk){
        body += chunk.toString();
      });

      res.on('end', function(chunk){
        done(null, body);
      });
    }).on('error', function(e){
      done(e);
    });
  }],
  function (err, res) {
    if (err) console.log(err);
    console.log(res);
  }
);
