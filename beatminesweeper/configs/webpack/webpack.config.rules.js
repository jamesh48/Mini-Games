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
      options: { url: false },
    },
    {
      loader: "sass-loader",
      options: {
        additionalData: process.env.CloudfrontCSS || "$Cloudfront: '';",
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
  use: {
    loader: "ts-loader",
    options: {
      compilerOptions: {
        emitDecoratorMetadata: true,
      },
    },
  },
  exclude: /node_modules/,
};

const mjsRules = {
  test: /\.mjs$/,
  include: /node_modules/,
  type: 'javascript/auto',
  resolve: { fullySpecified: false },
};

module.exports = {
  module: {
    rules: [mjsRules, jsRules, cssRules, tsRules],
  },
};
