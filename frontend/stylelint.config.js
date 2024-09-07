module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-prettier/recommended'],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  plugins: ['stylelint-order', './customPlugins/stylelint-alphabetize-selectors'],
  rules: {
    'no-empty-source': null, // Disables the no-empty-source rule
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,
    'plugin/alphabetize-selectors': [true, { fix: true }],
    'prettier/prettier': true,
  },
};
