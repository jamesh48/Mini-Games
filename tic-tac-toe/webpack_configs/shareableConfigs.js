const path = require('path');

const aliases = {
  GlobalUtils: path.resolve(__dirname, '../globalUtils.js'),
  Public: path.resolve(__dirname, '../dist/public'),
  Components: path.resolve(__dirname, '../src/public/components'),
  MainStore: path.resolve(__dirname, '../src/public/components/MainComponents/MainStore/mainStore.js'),
  PlayerHeaderStore: path.resolve(__dirname, '../src/public/components/PlayerHeaderComponents/PlayerHeaderStore/playerHeaderStore.js'),
  BoardStore: path.resolve(__dirname, '../src/public/components/BoardComponents/BoardStore/boardStore.js'),
  Database: path.resolve(__dirname, '../database')
};

const stats = {
  cached: false,
  cachedAssets: false,
  chunks: false,
  chunkModules: false,
  chunkOrigins: false,
  modules: false
};
// stats: 'minimal' || 'errors-only

module.exports = { aliases, stats };


