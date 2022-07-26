module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    // "airbnb",
    // "airbnb-typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  rules: {
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-var-requires": "error",
  },
  ignorePatterns: [
    "node_modules",
    "dist",
    "__dll_static__",
    "config",
    ".eslintrc.js",
  ],
};
