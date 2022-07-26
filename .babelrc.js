module.exports = {
  presets: [
    "@babel/preset-env",
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
    "@babel/plugin-syntax-dynamic-import",
  ],
};
