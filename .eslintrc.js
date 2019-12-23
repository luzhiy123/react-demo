module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint-config-umi",
    "plugin:@typescript-eslint/recommended",
    "react-app",
    "plugin:prettier/recommended"
  ],
  plugins: [
    "@typescript-eslint",
    "react"
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": 0,
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/anchor-has-content": "off"
  },
};