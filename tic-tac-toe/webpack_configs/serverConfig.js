const webpack = require('webpack');
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const cssRules = require(path.resolve(__dirname, 'cssRules.js'));
const jsRules = require(path.resolve(__dirname, 'jsRules.js'));

require('dotenv').config({ path: './.env' });

const serverConfig = {
  mode: 'development',
  target: 'node',
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env.DEV_ENV': process.env.DEV_ENV
    }),
  ],

  devtool: 'source-map',
  node: {
    __dirname: false,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      GlobalUtils: path.resolve(__dirname, '../globalUtils.js'),
      Public: path.resolve(__dirname, '../dist/public'),
      Components: path.resolve(__dirname, '../src/public/components'),
      MainStore: path.resolve(__dirname, '../src/public/components/MainComponents/MainStore/mainStore.js'),
      PlayerHeaderStore: path.resolve(__dirname, '../src/public/components/PlayerHeaderComponents/PlayerHeaderStore/playerHeaderStore.js'),
      BoardStore: path.resolve(__dirname, '../src/public/components/BoardComponents/BoardStore/boardStore.js'),
      Database: path.resolve(__dirname, '../database')
    }
  },
  externals: [nodeExternals()],
  entry: {
    "server": path.resolve(__dirname, '../src/server/index.js'),
  },
  module: {
    rules: [jsRules, cssRules],
  },
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: '[name].js'
  },
};

module.exports = serverConfig;