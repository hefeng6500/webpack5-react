module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: "3.22",
      },
    ],
    ["@babel/preset-react", { runtime: "automatic" }],
    ["@babel/preset-typescript", { allowNamespaces: true }],
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: 3,
      },
    ],
  ],
};
