const path = require("path");

module.exports = async ({ createPage, graphql }) => {
  const component = path.resolve(
    process.cwd(),
    "../my-gatsby-site/src/templates/Product/Product.js"
  );

  const {
    data: {
      products: { promotionRowProducts },
    },
  } = await graphql(`
    {
      products {
        promotionRowProducts {
          properties {
            boldTitle
            buttonUrl {
              url
            }
          }
        }
      }
    }
  `);

  promotionRowProducts.map(
    ({
      properties: {
        boldTitle,
        buttonUrl: [{ url }],
      },
    }) => {
      createPage({
        path: url,
        component,
        context: {
          name: boldTitle,
        },
      });
    }
  );
};
