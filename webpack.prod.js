export default {
  mode: 'production',
  devtool: "source-map",
  //Точка входа по дефу index.js
  entry: `./src/js/app.js`,

  output: {
    filename: `./scripts.min.js`,
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },

    ],
  },
};