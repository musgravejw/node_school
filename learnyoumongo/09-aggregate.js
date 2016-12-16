var mongo = require('mongodb').MongoClient;
var size = process.argv[2];
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
  var prices = db.collection('prices');

  prices.aggregate([
    {
      $match: {
        size: size
      }
    },
    {
      $group: {
        _id: 'average'
        , average: {
          $avg: '$price'
        }
      }
    }
  ]).toArray(function(err, results) {
    var res = results[0];
    console.log(Number(res.average).toFixed(2));
    db.close();
  })
})
