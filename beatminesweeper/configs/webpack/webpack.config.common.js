const { rootPath, relativePath } = require("../paths");

const webpack = require("webpack");
const { merge } = require("webpack-merge");

const moduleRules = require(relativePath("webpack/webpack.config.rules.js"));
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

require("dotenv").config({ path: rootPath("configs/dotenv/.env") });

module.exports = merge(moduleRules, {
  mode: process.env.NODE_ENV ? "development" : "development",
  devtool: process.env.NODE_ENV ? "inline-source-map" : "source-map",
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      "process.env.Cloudfront": JSON.stringify(process.env.Cloudfront),
      "process.env.PGPassword": JSON.stringify(process.env.PGPassword),
      "process.env.redis_secret": JSON.stringify(process.env.redis_secret)
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      TSSrc: rootPath("ts-src"),
      GlobalStore: rootPath("ts-src/public/GlobalStore/GlobalStore"),
      TSComponents: rootPath("ts-src/public/components"),
      TSDatabase: rootPath("ts-src/database"),
      BoardStore: rootPath(
        "ts-src/public/components/Board/BoardStore/BoardStore"
      ),
      TimerStore: rootPath("ts-src/public/components/MillisecondTimer/TimerStore/TimerStore"),
      MinesweeperTypes: rootPath("ts-src/minesweeper-types"),
      CustomHooks: rootPath("ts-src/public/components/customHooks"),
    },
  },
  stats: {
    cached: false,
    cachedAssets: false,
    chunks: false,
    chunkModules: false,
    chunkOrigins: false,
    modules: false,
  },
});
