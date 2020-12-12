const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname + "/dist",
    filename: "index_bundle.js",
    publicPath: "/bookmark-app-redo/",
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "/src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
};
