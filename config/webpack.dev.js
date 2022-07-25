const path = require("path");
const fs = require("fs");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const resolve = (filename) => path.resolve(__dirname, filename);

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "../public"),
    },
    historyApiFallback: true,
    compress: true,
    port: 9000,
    http2: true,
    https: {
      key: fs.readFileSync(resolve("./ssl/ssl.key")),
      cert: fs.readFileSync(resolve("./ssl/ssl.crt")),
    },
  },
  plugins: [],
  stats: "errors-only", // 只在发生错误或有新的编译时输出
});
