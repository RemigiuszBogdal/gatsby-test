const homeBuilder = require("./pageBuilders/home");
const productBuilder = require("./pageBuilders/product");

module.exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const pageBuilder = [
    homeBuilder({ createPage, graphql }),
    productBuilder({ createPage, graphql }),
  ];

  await Promise.all(pageBuilder);
};
