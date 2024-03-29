import * as path from "path";
import * as webpack from "webpack";
import commonConfig from "./webpack.common";

const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const { merge } = require("webpack-merge");
const chalk = require("chalk");
const CopyPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

const config: webpack.Configuration = merge(commonConfig, {
  mode: "production",
  devtool: false,
  output: {
    filename: "./js/[name]-[contenthash:8].js",
    path: path.resolve(__dirname, "../dist"),
    chunkFilename: (pathData: any) => {
      return pathData.chunk.name === "main"
        ? "js/[name].js"
        : "js/[name]/[contenthash:8].js";
    },
    asyncChunks: true,
    clean: true,
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: "pre",
        use: [
          {
            loader: "thread-loader",
            // 有同样配置的 loader 会共享一个 worker 池
            options: {
              // 产生的 worker 的数量，默认是 (cpu 核心数 - 1)，或者，
              // 在 require('os').cpus() 是 undefined 时回退至 1
              workers: require("os").cpus().length - 1,

              // 一个 worker 进程中并行执行工作的数量
              // 默认为 20
              workerParallelJobs: 50,

              // 额外的 node.js 参数
              workerNodeArgs: ["--max-old-space-size=4096"],

              // 允许重新生成一个僵死的 work 池
              // 这个过程会降低整体编译速度
              // 并且开发环境应该设置为 false
              poolRespawn: false,

              // 闲置时定时删除 worker 进程
              // 默认为 500（ms）
              // 可以设置为无穷大，这样在监视模式(--watch)下可以保持 worker 持续存在
              poolTimeout: 2000,

              // 池分配给 worker 的工作数量
              // 默认为 200
              // 降低这个数值会降低总体的效率，但是会提升工作分布更均一
              poolParallelJobs: 50,

              // 池的名称
              // 可以修改名称来创建其余选项都一样的池
              name: "my-pool",
            },
          },
          {
            loader: "babel-loader",
            options: { cacheDirectory: true },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, "../__dll_static__"),
    //       to: path.resolve(__dirname, "../dist"),
    //     },
    //   ],
    // }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[id].[contenthash:8].css",
    }),
    new ProgressBarPlugin({
      format:
        `${chalk.green.bold("build[:bar]")} ` +
        chalk.green.bold(":percent") +
        " (:elapsed seconds)",
      clear: false,
      width: 60,
    }),
    new HtmlWebpackTagsPlugin({
      tags: [
        "https://unpkg.com/react@18.2.0/umd/react.production.min.js",
        "https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js",
      ],
      append: false,
    }),
    // open Scope Hoisting default by production mode
    // https://webpack.docschina.org/plugins/module-concatenation-plugin/
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  stats: "normal", //标准输出
  optimization: {
    runtimeChunk: "single",
    moduleIds: "deterministic",
    minimize: true,
    splitChunks: {
      chunks: "all",
      minChunks: 1,
      minSize: 1,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
          priority: 1,
        },
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "react",
          chunks: "all",
          priority: 2,
        },
      },
    },
  },
});

export default config;
