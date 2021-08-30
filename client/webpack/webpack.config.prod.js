const os = require('os');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    chunkFilename: "[name].[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
        },
      },
      {
        test: /\.svg$/i,
        loader: 'svg-url-loader',
        options: {
          limit: 8 * 1024,
        },
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        loader: 'image-webpack-loader',
        enforce: 'pre',
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      '...',
      new CssMinimizerPlugin({
        parallel: os.cpus().length - 1,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "js/vendor",
          chunks: "all",
        },
      },
    },
  },
}