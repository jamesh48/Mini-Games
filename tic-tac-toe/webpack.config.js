const path = require('path')

const serverConfig = require(path.resolve(__dirname, 'webpack_configs/serverConfig.js'));
const clientConfig = require(path.resolve(__dirname, 'webpack_configs/clientConfig.js'));

module.exports = [serverConfig, clientConfig];
