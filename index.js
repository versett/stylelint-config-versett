"use strict";

module.exports = {
  extends: [
    require.resolve("./rules"),
    "stylelint-config-prettier",
    "stylelint-config-sass-guidelines"
  ]
};
