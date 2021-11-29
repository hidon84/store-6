'use strict';

const paths = require('./paths.js');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    providedExports: false,
  },
  output: {
    filename: 'static/js/build.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader',]
      },
    ]
  },
  devServer: {
    static: paths.appBuild,
    compress: true,
    port: 8080,
    historyApiFallback: true,
  },
}