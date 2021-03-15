module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true
  },
  "settings": {
    "ecmascript": 6,
    "jsx": true
  },
  "parserOptions": {
    "ecmaVersion": 2017,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "experimentalDecorators": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-native",
  ],
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "rules": {
    "block-spacing": "error",
    "semi": ["error", "always"],
    "quotes": ["error", "single"],
    "eqeqeq": ["error", "always"],
    "no-param-reassign": ["error", { "props": true }],
    "react/display-name": 0,
    "indent": [
      "error",
      2,
      { "SwitchCase": 1, }
    ],
    "object-property-newline": ["error", {
      "allowAllPropertiesOnSameLine": true,
    }],
    "react/prop-types": 0,
    "no-trailing-spaces": "error",
    "react/jsx-filename-extension": 0,
    "function-paren-newline": 0,
  },
};