
const path = require("path");
const webpack = require("webpack");
const WebpackNotifierPlugin = require("webpack-notifier");
// const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
// const workboxPlugin = require('workbox-webpack-plugin');



module.exports = {
  // mode: 'production',
  mode: "development",
  devtool: "source-map",
  //Точка входа по дефу index.js
  entry: ['babel-polyfill', './app/js/app.js'],
  // entry: ['./app/js/app.js'],

  output: {
    // Название итогового файла по дефу bandle.js
        // filename: "../assets/[name].min.js",
    filename: "../assets/scripts.min.js",
    // chunkFilename: '../assets/libs.min.js',
  },


  // optimization: {
    // splitChunks: {
    //   chunks: 'all',
    // },
  // },

  // devServer: {
  //   contentBase: path.join(__dirname, 'app'),
  //   compress: true,
  //   port: 3000
  // },

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

      {
        test: /\.css$/i,
        loader: "css-loader",
      },

    ],
  },


  resolve: {
      // extensions: ['.js'],
      // alias: {
      //   '@p': path.resolve(__dirname, './app/js/custom-plugin'),
      //   '@l': path.resolve(__dirname, './app/js/libs'),
      //   '@z': path.resolve(__dirname, './app/js/zayavka'),
      //     '~': path.resolve(__dirname, './app'),
      //     '@': path.resolve(__dirname, './app/js'),
      //     '@s': path.resolve(__dirname, './app/css'),
      //     // "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
      //     // "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
      //     // "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
      //     // "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
      //     "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
      //     "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
      //     "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
      // },
  },

  plugins: [
    new WebpackNotifierPlugin({
      title: "Webpack",
      skipFirstNotification: true,
    }),


    // new BundleAnalyzerPlugin({
    //   analyzerMode: "static",
    //   analyzerPort: 3000,
    //   openAnalyzer: false,
    // }),


    // new webpack.ProvidePlugin({
    //   $: "../js/jquery.min.js",
    //   jQuery: "../js/jquery.min.js",
    //   "window.jQuery": "../js/jquery.min.js",
    //   'jquery': '../js/jquery.min.js"'
    // }),

 
  ],
};




module.exports = {
  // mode: 'production',
  mode: "development",
  devtool: "source-map",
  //Точка входа по дефу index.js
  entry: ['babel-polyfill', './app/js/app.js'],

  output: {
    // Название итогового файла по дефу bandle.js
        // filename: "../assets/[name].min.js",
    filename: "../assets/scripts.min.js",
    // chunkFilename: '../assets/libs.min.js',
  },


  // optimization: {
    // splitChunks: {
    //   chunks: 'all',
    // },
  // },

  // devServer: {
  //   contentBase: path.join(__dirname, 'app'),
  //   compress: true,
  //   port: 3000
  // },

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

      {
        test: /\.css$/i,
        loader: "css-loader",
      },

    ],
  },


  resolve: {
      // extensions: ['.js'],
      alias: {
        '@p': path.resolve(__dirname, './app/js/custom-plugin'),
        '@l': path.resolve(__dirname, './app/js/libs'),
        '@z': path.resolve(__dirname, './app/js/zayavka'),
          '~': path.resolve(__dirname, './app'),
          '@': path.resolve(__dirname, './app/js'),
          '@s': path.resolve(__dirname, './app/css'),
          // "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
          // "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
          // "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
          // "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
          "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
          "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
          "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
      },
  },

  plugins: [
    new WebpackNotifierPlugin({
      title: "Webpack",
      skipFirstNotification: true,
    }),


    // new BundleAnalyzerPlugin({
    //   analyzerMode: "static",
    //   analyzerPort: 3000,
    //   openAnalyzer: false,
    // }),


    // new webpack.ProvidePlugin({
    //   $: "../js/jquery.min.js",
    //   jQuery: "../js/jquery.min.js",
    //   "window.jQuery": "../js/jquery.min.js",
    //   'jquery': '../js/jquery.min.js"'
    // }),

 
  ],
};

