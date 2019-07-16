const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = env => {
  return {
    mode: env.NODE_ENV || 'development',
    devtool: 'source-map',
    entry: {
      "fxd.es5": "./fxjs-dom.js",
      "fxd.es5.min": "./fxjs-dom.js"
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules\/(?!fxjs2\/).*/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    optimization: {
      minimize: true,
      minimizer: [new UglifyJsPlugin({
        include: /\.min\.js$/
      })]
    }
  }
};