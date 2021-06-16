const axios = require("axios");

module.exports.createNodes = async (
  { actions: { createNode }, createContentDigest, createNodeId },
  pluginConfig
) => {
  const {
    data: {
      response: { content },
    },
  } = await axios({
    method: "get",
    baseURL: pluginConfig.apiURL,
    url: "api/v1/content/",
    headers: {
      "x-origin": pluginConfig.apiURL,
    },
  });

  createNode({
    ...content.properties,
    id: createNodeId("homepage"),
    parent: null,
    children: [],
    internal: {
      type: "HomePageType",
      contentDigest: createContentDigest(content),
    },
  });
};
