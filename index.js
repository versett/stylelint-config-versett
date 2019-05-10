"use strict";

module.exports = {
  extends: [
    "stylelint-config-sass-guidelines",
    require.resolve("./rules"),
    "stylelint-config-prettier"
  ]
};
