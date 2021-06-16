const homeHelper = require("./helpers/home");
const productsHelper = require("./helpers/products");

const nodeHelpers = [homeHelper, productsHelper];

module.exports.sourceNodes = async (props, pluginConfig) => {
  await Promise.all(
    nodeHelpers.map(async (nodeHelper) => {
      await nodeHelper.createNodes(props, pluginConfig);
    })
  );
};
