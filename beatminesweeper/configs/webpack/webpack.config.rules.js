const { rootPath } = require("../paths.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
require("dotenv").config({ path: rootPath("configs/dotenv/.env") });

const cssRules = {
  test: /\.(css|scss)$/,
  include: [rootPath("ts-src/public")],
  exclude: /node_modules/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
    },
    {
      loader: "sass-loader",
      options: {
        additionalData: process.env.CloudfrontCSS,
      },
    },
  ],
};

const jsRules = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
  },
};

const tsRules = {
  test: /\.(ts|tsx)?$/,
  use: "ts-loader",
  exclude: /node_modules/,
};

module.exports = {
  module: {
    rules: [jsRules, cssRules, tsRules],
  },
};
