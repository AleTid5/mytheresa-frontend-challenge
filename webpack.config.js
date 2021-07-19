const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
    publicPath: "/",
    clean: true,
  },
  devServer: {
    port: 3000,
    watchContentBase: true,
    historyApiFallback: true, // This is line is required to correctly use React Router
  },
  // Rules of how webpack will take our files, compile & bundle them for the browser
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    new MiniCssExtractPlugin(),
    new Dotenv(),
  ],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "src/assets"),
      config: path.resolve(__dirname, "src/config"),
      components: path.resolve(__dirname, "src/components"),
      "custom-hooks": path.resolve(__dirname, "src/custom-hooks"),
      pages: path.resolve(__dirname, "src/pages"),
    },
  },
};
