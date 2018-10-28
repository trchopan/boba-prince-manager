process.env.VUE_APP_VERSION = require("./package.json").version;
process.env.VUE_APP_AUTHOR = require("./package.json").author;
process.env.VUE_APP_TITLE = "Boba Prince ERP";

module.exports = {
  configureWebpack: {
    performance: {
      maxEntrypointSize: 1024000,
      maxAssetSize: 1024000
    }
  }
};
