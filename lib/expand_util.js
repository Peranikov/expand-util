var util = require('util');

util.isJSON = function(str) {
  try {
    if (!str) {
      return false;
    }

    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = util;
