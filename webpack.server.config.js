const path = require("path");
// const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {server: "./server.ts"},
  resolve: {extensions: [".js", ".ts"]},
  target: "node",
  externals: [/(node_modules|main\..*\.js)/],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {test: /\.ts$/, loader: "ts-loader"},
    ]
  }
}