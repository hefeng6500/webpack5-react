import commonConfig from "./webpack.common";
import * as path from "path";
import * as fs from "fs";
import * as webpack from "webpack";

const { merge } = require("webpack-merge");
const resolve = (filename: string) => path.resolve(__dirname, filename);

const config: webpack.Configuration = merge(commonConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "../public"),
    },
    hot: true,
    historyApiFallback: true,
    compress: true,
    port: 9000,
    http2: true,
    https: {
      key: fs.readFileSync(resolve("./ssl/ssl.key")),
      cert: fs.readFileSync(resolve("./ssl/ssl.crt")),
    },
  },
  stats: "errors-only",
  plugins: [],
  optimization: {},
});

export default config;
