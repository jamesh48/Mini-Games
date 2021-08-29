const path = require('path');
const SRC_DIR = path.resolve('src');
const DIST_DIR = path.resolve('public');

module.exports = {
  mode: 'production',
  watch: true,
  entry: path.join(SRC_DIR, 'index.jsx'),
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
      {
        test: /\.(css|scss)$/,
        include: path.resolve('src'),
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              // discardDuplicates: true,
              importLoaders: 1,
              // modules: {
              //   localIdentName: '[name]__[local]___[hash:base64:5]',
              // },
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          },
        ]
      },
      {
        test: /\.(png)$/,
        include: path.resolve('src/images'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
}
