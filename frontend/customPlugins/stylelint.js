const stylelint = require('stylelint');

const ruleName = 'plugin/expense-hound';
const messages = stylelint.utils.ruleMessages(ruleName, {
  expected: 'Expected custom plugin to work',
});

module.exports = stylelint.createPlugin(
  ruleName,
  function (primaryOption, secondaryOption, context) {
    return function (root, result) {
      const validOptions = stylelint.utils.validateOptions(result, ruleName, {
        actual: primaryOption,
      });

      if (!validOptions) {
        return;
      }

      function processNode(node) {
        // do nothing for now
      }

      processNode(root);
    };
  },
);

module.exports.ruleName = ruleName;
module.exports.messages = messages;
