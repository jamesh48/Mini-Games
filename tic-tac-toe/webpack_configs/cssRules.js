const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const cssRules = {
  test: /\.(css|scss)$/,
  include: path.resolve(__dirname, '../src'),
  exclude: /node_modules/,
  use: [
    { loader: MiniCssExtractPlugin.loader },
    {
      loader: 'css-loader'
    },
    {
      loader: 'sass-loader',
      // options: {
      //   additionalData: process.env.CloudfrontCSS
      // }
    }
  ]
};

module.exports = cssRules;