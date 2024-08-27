const componentGenerator = require("./generators/component");
const featureGenerator = require("./generators/feature");

module.exports = function (plop) {
  componentGenerator(plop);
  featureGenerator(plop);
};
