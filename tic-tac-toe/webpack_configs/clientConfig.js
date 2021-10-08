const webpack = require('webpack');
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { aliases, stats } = require('./shareableConfigs.js');

const cssRules = require(path.resolve(__dirname, 'cssRules.js'));
const jsRules = require(path.resolve(__dirname, 'jsRules.js'));

module.exports = {
  mode: "development",
  devtool: "source-map",
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    // https://betterprogramming.pub/use-absolute-paths-with-react-51ced66f119f
    alias: aliases
  },

  target: "web",
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env.DEV_ENV': process.env.DEV_ENV
    }),
  ],
  entry: {
    "index": path.resolve(__dirname, '../src/index.js'),
  },
  module: {
    rules: [jsRules, cssRules],
  },
  output: {
    path: path.resolve(__dirname, "../dist/public"),
    filename: "[name].js",
  },
  stats: stats,
};