module.exports = function *generate() {
  var num = 0,
      multiplier = 1;

  while(true) {
    num++;
    multiplier = yield num * multiplier;
    if (!multiplier) {
      multiplier = 1;
    }
  }
}
