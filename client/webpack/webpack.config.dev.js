const path = require('path');

module.exports = {
  mode: 'development',
  optimization: {
    providedExports: false,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader',]
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
        },
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 8080,
    historyApiFallback: true,
  },
}