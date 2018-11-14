const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const dotenv = require('dotenv').config({ path: path.join(__dirname, '.env') });

const { PORT = 3000 } = process.env;

module.exports = {
  entry: path.join(__dirname, 'client', 'index.jsx'),
  devServer: {
    port: 8080,
    proxy: {
      '/api': `http://localhost:${PORT}`,
      contentBase: path.join(__dirname, 'dist'),
      publicPath: '/',
    },
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'dist', 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
};
