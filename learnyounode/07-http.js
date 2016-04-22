// perform a GET request to a URL, print out the contents of the response

var http = require('http');
var url = process.argv[2];

http.get(url, function(res) {
  res.on("data", function(data) {
    console.log(data.toString());
  });

  res.on("error", function(error) {
  	console.log(error.toString());
  })

  res.on("end", function(end) {
    console.log(end);
  })
});
