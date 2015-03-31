module.exports = function getEnvVariable(options) {
  "use strict";

  return process.env[options.hash.var];
};
