const path = require('path');
const SRC_DIR = path.resolve('src');
const DIST_DIR = path.resolve('public');

module.exports = {
  mode: 'development',
  // watch: true,
  entry: path.join(SRC_DIR, 'index.js'),
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
          {
            loader: 'sass-loader'
          }
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
    // https://betterprogramming.pub/use-absolute-paths-with-react-51ced66f119f
    alias: {
      Components: path.resolve(__dirname, 'src/components/')
    }
  },
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
};