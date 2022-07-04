const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "../public"),
    },
    compress: true,
    port: 9000,
  },
  plugins: [],
  stats: "errors-only", // 只在发生错误或有新的编译时输出
});
