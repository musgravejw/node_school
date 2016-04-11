const _ = require('lodash');

function sortQuantity(items) {
  return _.sortBy(items, function(a) {
    return -a.quantity;
  });
}

module.exports = sortQuantity;

