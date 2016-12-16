var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var firstName = process.argv[2];
var lastName = process.argv[3];

var obj = {
  firstName: firstName,
  lastName: lastName
};

mongo.connect(url, function(err, db) {
  var collection = db.collection('docs');

  collection.insert(obj, function(err, data) {
    console.log(JSON.stringify(obj));
    db.close();
  });
});
