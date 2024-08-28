module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-order', './customPlugins/stylelint'],
  rules: {
    'prettier/prettier': true,
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,
    'no-empty-source': null, // Disables the no-empty-source rule
    'plugin/expense-hound': [true, { fix: true }],
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
};
