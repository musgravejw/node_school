module.exports = function makeCounter(obj) {
  var i = 0;
  var done = false;

  obj.next = function() {
    if (i < 10)
      i++;
    else
      done = true;

    return {
      value: i,
      done: done
    };
  };
};
