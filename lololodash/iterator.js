const _ = require('lodash');

function addSize(data) {
  return _.forEach(data, function(item) {
    if (item.population > 1)
      item.size = 'big';
    else if (item.population > 0.5)
      item.size = 'med';
    else
      item.size = 'small';
  });
}

module.exports = addSize;
