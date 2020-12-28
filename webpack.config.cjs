const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const { NODE_ENV, BABEL_ENV } = process.env;

const filename = BABEL_ENV === "modern" ? "fxd.js" : "fxd.es5.js";

module.exports = {
  target: ["web", BABEL_ENV === "modern" ? "es6" : "es5"],
  mode: NODE_ENV || "development",
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename,
    library: "$",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!fxjs\/es\/).*/,
        use: {
          loader: "babel-loader",
        },
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
