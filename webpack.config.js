const path = require("path");
const MinimizePlugin = require(process.env.legacy === "true" ? "uglifyjs-webpack-plugin" : "terser-webpack-plugin");
const filename = process.env.legacy === "true" ? "fxd.es5.js" : "fxd.js";
const rules = process.env.legacy === "true"
  ? [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!fxjs2\/).*/,
        use: {
          loader: "babel-loader",
        },
      },
    ]
  : [];

module.exports = {
  mode: process.env.NODE_ENV || "development",
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename,
    library: "$",
    libraryTarget: "umd"
  },
  module: {
    rules,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new MinimizePlugin({
        include: /\.js$/,
      }),
    ],
  },
};
