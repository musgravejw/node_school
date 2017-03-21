var promise = new Promise(function (fulfill, reject) {
  reject(new Error('SECRET VALUE'));
});

var promise = Promise.reject(new Error('SECRET VALUE'));

promise.catch(function (err) {
  console.log(new Error("caught"));
});
