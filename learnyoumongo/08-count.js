var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var age = parseInt(process.argv[2]);

mongo.connect(url, function(err, db) {
  var parrots = db.collection('parrots');

  parrots.count({
    age: {
      $gt: age
    }
  }, function(err, count) {
    console.log(count);
    db.close();
  });
});
