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
    chunkFilename: "[name].js",
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
        test: /\.(svg|png|jpe?g|gif)$/,
        loader: 'image-webpack-loader',
        // This will apply the loader before the other ones
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
          test: /[\\/]node_modules[\\/]/, ///< put all used node_modules modules in this chunk
          name: "js/vendor", ///< name of bundle
          chunks: "all" ///< type of code to put in this bundle
        },
      },
    },
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 8080,
    historyApiFallback: true,
  },
}