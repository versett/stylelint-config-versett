"use strict";

module.exports = {
  extends: [
    "stylelint-config-prettier",
    require.resolve("./rules"),
    "stylelint-config-sass-guidelines"
  ]
};
