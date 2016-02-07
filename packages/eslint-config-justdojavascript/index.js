module.exports = {
  extends: [
    'eslint-config-justdojavascript/base',
    'eslint-config-justdojavascript/rules/strict',
    'eslint-config-justdojavascript/rules/react',
  ].map(require.resolve),
  rules: {}
};
