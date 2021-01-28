'use strict';

try {
  var generatorFunction = eval('(function* () {})');
  module.exports = Object.getPrototypeOf(generatorFunction).constructor;
} catch (ex) {
  module.exports = undefined;
}
