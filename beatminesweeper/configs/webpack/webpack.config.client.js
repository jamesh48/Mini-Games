const { rootPath, relativePath } = require("../paths.js");

const { merge } = require("webpack-merge");

const commonConfig = require(relativePath("webpack/webpack.config.common.js"));

module.exports = merge(commonConfig, {
  target: "web",
  entry: {
    index: rootPath("ts-src/public/index.tsx"),
  },
  output: {
    path: rootPath("ts-dist/public"),
    filename: "[name].js",
  },
});
