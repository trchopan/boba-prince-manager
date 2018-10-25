process.env.VUE_APP_VERSION = require("./package.json").version;
process.env.VUE_APP_AUTHOR = require("./package.json").author;
process.env.VUE_APP_TITLE = "Hoàng Tử Trà Sữa - Boba Prince";

const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");

module.exports = {
  configureWebpack: {
    performance: {
      maxEntrypointSize: 1024000,
      maxAssetSize: 1024000
    },
    plugins: [new VuetifyLoaderPlugin()]
  }
};
