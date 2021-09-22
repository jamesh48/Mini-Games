const webpack = require('webpack');
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
require('dotenv').config({ path: './.env' });

console.log(path.resolve(__dirname, 'src/store'))
const css = {
  test: /\.(css|scss)$/,
  include: path.resolve(__dirname, 'src'),
  exclude: /node_modules/,
  use: [MiniCssExtractPlugin.loader, {
    loader: "css-loader"
  }, {
    loader: "sass-loader",
    options: {
      additionalData: process.env.CloudfrontCSS
    }
  }]
}

const js = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
  },
};

const serverConfig = {
  mode: "development",
  target: "node",
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env.DEV_ENV': process.env.DEV_ENV
    }),
  ],
  devtool: "source-map",
  node: {
    __dirname: false,
  },
  resolve: {
    //   fallback: {
    //     "fs": false,
    //     "path": false,
    //     "os": false
    //   }
    extensions: ['*', '.js', '.jsx'],
    // https://betterprogramming.pub/use-absolute-paths-with-react-51ced66f119f
    alias: {
      Components: path.resolve(__dirname, 'src/components'),
      Database: path.resolve(__dirname, 'db'),
      Public: path.resolve(__dirname, 'dist/public'),
      Cloudfront: [process.env.Cloudfront],
      GlobalStore: path.resolve(__dirname, 'src/store/GlobalStore.js'),
      UserNameStore: path.resolve(__dirname, 'src/components/UserNameEntry/UserNameStore/userNameStore.js'),
      BoardStore: path.resolve(__dirname, 'src/components/Board/BoardStore/boardStore.js'),
      SquareStore: path.resolve(__dirname, 'src/components/Board/Squares/SquareStore/squareStore.js'),
      LeaderBoardStore: path.resolve(__dirname, 'src/components/Leaderboard/LeaderBoardStore/leaderBoardStore.js'),
      TimerStore: path.resolve(__dirname, 'src/components/MillisecondTimer/TimerStore/timerStore.js')
    },
  },
  externals: [nodeExternals()],
  entry: {
    "server": path.resolve(__dirname, "src/ssr-server/index.js"),
  },
  module: {
    rules: [js, css],
  },
  output: {
    path: path.resolve(__dirname, "dist/server"),
    filename: "[name].js",
  },
};

const clientConfig = {
  mode: "development",
  devtool: "source-map",
  // Req by webpack 5/ala dotenv-environment variables
  resolve: {
    //   fallback: {
    //     "fs": false,
    //     "path": false,
    //     "os": false
    //   }
    extensions: ['*', '.js', '.jsx'],
    // https://betterprogramming.pub/use-absolute-paths-with-react-51ced66f119f
    alias: {
      Components: path.resolve(__dirname, 'src/components'),
      GlobalStore: path.resolve(__dirname, 'src/store/GlobalStore.js'),
      UserNameStore: path.resolve(__dirname, 'src/components/UserNameEntry/UserNameStore/userNameStore.js'),
      BoardStore: path.resolve(__dirname, 'src/components/Board/BoardStore/boardStore.js'),
      SquareStore: path.resolve(__dirname, 'src/components/Board/Squares/SquareStore/squareStore.js'),
      LeaderBoardStore: path.resolve(__dirname, 'src/components/Leaderboard/LeaderBoardStore/leaderBoardStore.js'),
      TimerStore: path.resolve(__dirname, 'src/components/MillisecondTimer/TimerStore/timerStore.js')
      // Public: path.resolve(__dirname, 'dist/public')
    },
  },

  target: "web",
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env.DEV_ENV': process.env.DEV_ENV
    }),
  ],
  entry: {
    "index": path.resolve(
      __dirname,
      "src/index.js"
    ),
  },
  module: {
    rules: [js, css],
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //   },
  // },
  output: {
    path: path.resolve(__dirname, "dist/public"),
    filename: "[name].js",
  },
};

module.exports = [serverConfig, clientConfig];
