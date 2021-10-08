const { rootPath, relativePath } = require("../paths.js");
require("dotenv").config({ path: rootPath('configs/dotenv/.env')});

console.log(
  !!process.env.NODE_ENV
    ? "<--- Webpack compiling in dev mode --->"
    : "<-- Webpack compiling in production -->"
);

const clientConfig = require(relativePath('webpack/webpack.config.client.js'));
const serverConfig = require(relativePath('webpack/webpack.config.server.js'));

module.exports = [serverConfig, clientConfig];
