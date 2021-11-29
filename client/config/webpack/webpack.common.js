'use strict';

const paths = require('./paths.js');
const getClientEnvironment = require('./env.js');

const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const imageInlineSizeLimit = process.env.IMAGE_INLINE_SIZE_LIMIT
  ? parseInt(process.env.IMAGE_INLINE_SIZE_LIMIT)
  : 1024 * 10;

const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));

module.exports = {
  entry: paths.appIndex,
  output: {
    path: paths.appBuild,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: true,
              configFile: paths.babelConfig,
            },
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(bmp|gif|jpe?g|png|webp)$/i,
        loader: 'url-loader',
        options: {
          limit: imageInlineSizeLimit,
          name: 'static/media/[name].[contenthash].[ext]',
        },
      },
      {
        test: /\.svg$/i,
        loader: 'svg-url-loader',
        options: {
          limit: imageInlineSizeLimit,
          name: 'static/media/[name].[contenthash].svg',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/font/[name].[contenthash][ext]'
        }
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CaseSensitivePathsPlugin(),
    new ForkTsCheckerWebpackPlugin({ typescript: true }),
    new HtmlWebpackPlugin({
      template: paths.appHtml,
      filename: 'index.html',
      templateParameters: env.raw,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: paths.appPublic,
          to: '.',
          noErrorOnMissing: true,
          globOptions: {
            ignore: ['./*/**/index.html'],
          },
        },
      ],
    }),
    new webpack.DefinePlugin(env.stringified),
  ],
};
