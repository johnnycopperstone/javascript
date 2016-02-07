module.exports = {
  extends: [
    'eslint-config-justdojavascript/rules/best-practices',
    'eslint-config-justdojavascript/rules/errors',
    'eslint-config-justdojavascript/rules/legacy',
    'eslint-config-justdojavascript/rules/node',
    'eslint-config-justdojavascript/rules/style',
    'eslint-config-justdojavascript/rules/variables'
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false
  },
  ecmaFeatures: {},
  globals: {},
  rules: {}
};
