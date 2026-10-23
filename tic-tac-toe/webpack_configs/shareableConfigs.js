const path = require('path');

const aliases = {
  Public: path.resolve(__dirname, '../dist/public'),
  Components: path.resolve(__dirname, '../src/public/components'),
  GameStore: path.resolve(__dirname, '../src/public/components/GameStore/gameStore.tsx'),
  Theme: path.resolve(__dirname, '../src/public/theme.ts'),
  Database: path.resolve(__dirname, '../database')
};

const extensions = ['.tsx', '.ts', '.js', '.jsx'];

const stats = {
  cached: false,
  cachedAssets: false,
  chunks: false,
  chunkModules: false,
  chunkOrigins: false,
  modules: false
};
// stats: 'minimal' || 'errors-only

module.exports = { aliases, extensions, stats };
