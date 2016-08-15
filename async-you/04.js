var async = require('async');
var http = require('http');

async.map(
  [
    process.argv[2],
    process.argv[3]
  ],
  function (url, done) {
    var body = '';
    http.get(url, function(res){
      res.on('data', function(chunk){
        body += chunk.toString();
      });

      res.on('end', function(){
        return done(null, body);
      });
    });
  },
  function (err, result) {
    if (err) console.log(err);

    console.log(result);
  }
);
