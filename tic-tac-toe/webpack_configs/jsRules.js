// targets: which runtime to compile for, e.g. { node: 'current' } for the server; browser defaults when left out
const jsRules = (targets) => ({
  test: /\.(js|jsx|ts|tsx)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: [["@babel/preset-env", targets ? { targets } : {}], "@babel/preset-react", "@babel/preset-typescript"],
    },
  },
});

module.exports = jsRules;
