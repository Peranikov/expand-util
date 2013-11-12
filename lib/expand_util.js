var util = require('util');

var isJSON = function(str) {
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

if (!('isJSON' in util))
  util.isJSON = isJSON;

module.exports = util;
