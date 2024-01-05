
const path = require("path");
const webpack = require("webpack");
const WebpackNotifierPlugin = require("webpack-notifier");
// const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
// const workboxPlugin = require('workbox-webpack-plugin');


module.exports = {
  mode: 'production',
  // mode: "development",
  // devtool: "source-map",
  //Точка входа по дефу index.js
  entry: ['babel-polyfill', './app/js/app.js'],

  output: {
    // Название итогового файла по дефу bandle.js
        // filename: "../assets/[name].min.js",
    filename: "../assets/scripts.min.js",
    // chunkFilename: '../assets/libs.min.js',
  },

  module: {
    rules: [

      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

    ],
  },

  plugins: [
  ],
};

