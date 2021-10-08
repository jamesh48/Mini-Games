const { rootPath, relativePath } = require("../paths.js");

const nodeExternals = require("webpack-node-externals");
const { merge } = require("webpack-merge");

const commonConfig = require(relativePath("webpack/webpack.config.common.js"));

module.exports = merge(commonConfig, {
  target: "node",
  node: {
    __dirname: false,
  },
  externals: [nodeExternals()],
  entry: {
    "server": rootPath("ts-src/server/index.ts"),
  },
  output: {
    path: rootPath("ts-dist/server"),
    filename: "[name].js",
  },
});
