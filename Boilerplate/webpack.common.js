const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "app.[contenthash].js",
    path: path.resolve(__dirname, "build"),
    clean: true
  },
  plugins: [new HtmlWebpackPlugin({
      template: './public/index.html',
  })],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader","sass-loader",],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator:{
            filename:'images/[name].[hash].[ext]'
        }
      },
    ],
  },
};
