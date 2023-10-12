module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: "module",
    project: "path/to/tsconfig-eslint.json",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-indent": [2, 4],
    indent: [2, 4],
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", "tsx"] }],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
  },
  include: ["path/to/.eslintrc.js"],
};
