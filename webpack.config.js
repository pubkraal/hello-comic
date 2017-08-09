var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    '/dist/index.min': './index.js'
  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
