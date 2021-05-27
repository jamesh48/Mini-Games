const SRC_DIR = './client/src';
const DIST_DIR = './client/public';
const path = require('path');
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, `${SRC_DIR}/index.jsx`),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"]
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, `${DIST_DIR}`),
    filename: 'bundle.js',
  },
};