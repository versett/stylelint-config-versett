"use strict";

module.exports = {
  extends: [
    require.resolve("./rules"),
    "stylelint-config-prettier",
    "stylelint-config-recommended-scss",
    "stylelint-config-sass-guidelines"
  ]
};
