var async = require('async');
var http = require('http');

// receive two urls from command line
// make a get request
// use object of task functions
// console.log result in callback

async.series({
    requestOne: function (done) {
      var body = '';
      http.get(process.argv[2], function (res) {
        res.on('data', function(chunk){
          body += chunk.toString();
        });

        res.on('end', function(chunk){
          done(null, body);
        });
      });
    },
    requestTwo: function (done) {
      var body = '';
      http.get(process.argv[3], function (res) {
        res.on('data', function(chunk){
          body += chunk.toString();
        });

        res.on('end', function(chunk){
          done(null, body);
        });
      })
    }
  },
  function (err, res) {
    if (err) console.log(err);
    console.log(res);
  }
);
