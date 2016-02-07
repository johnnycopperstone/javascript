module.exports = {
  extends: [
    'eslint-config-justdojavascript/legacy',
    'eslint-config-justdojavascript/rules/es6',
  ].map(require.resolve),
  rules: {}
};
