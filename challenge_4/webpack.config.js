const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");

const css = {
  test: /\.(css|scss)$/,
  include: path.resolve(__dirname, 'src'),
  exclude: /node_modules/,
  use: [MiniCssExtractPlugin.loader, "css-loader", {
    loader: "sass-loader"
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
  plugins: [new MiniCssExtractPlugin()],
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
      Components: path.resolve(__dirname, 'src/components')
    },
  },

  target: "web",
  plugins: [new MiniCssExtractPlugin()],
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
