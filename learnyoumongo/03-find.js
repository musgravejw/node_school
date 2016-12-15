var mongo = require('mongodb').MongoClient;
var age = parseInt(process.argv[2]);
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
  var collection = db.collection('parrots');
  collection.find({
    age: {
      $gt: age
    }
  }).toArray(function(err, documents) {
    console.log(documents);
    db.close();
  });
});
