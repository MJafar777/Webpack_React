import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  mode: "production",

  entry: path.resolve(__dirname, "src", "index.tsx"),

  output: {
    filename: "[name].[contenthash].ts",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new webpack.ProgressPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

export default config;
