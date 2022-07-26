module.exports = {
  presets: [
    "@babel/preset-env",
    {
      loose: true,
      useBuiltIns: "usage",
      corejs: 3,
      modules: false,
    },
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
