const _ = require('lodash');

function findActiveUsers(users) {
  return _.filter(users, { 'active': true});   
}

module.exports = findActiveUsers;

