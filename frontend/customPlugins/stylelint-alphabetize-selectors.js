const stylelint = require('stylelint');

const ruleName = 'plugin/alphabetize-selectors';
const messages = stylelint.utils.ruleMessages(ruleName, {
  unordered: (currentSelector, previousSelector) =>
    `Selector "${currentSelector}" should be placed after "${previousSelector}" for alphabetical order.`,
});

module.exports = stylelint.createPlugin(ruleName, (primaryOption, _) => {
  return (postcssRoot, postcssResult) => {
    if (!primaryOption) {
      return; // Exit if the rule is disabled
    }

    const selectorNodes = [];

    // Collect all rules with their respective selectors
    postcssRoot.walkRules((rule) => {
      selectorNodes.push(rule);
    });

    // Check for alphabetical ordering
    for (let i = 1; i < selectorNodes.length; i++) {
      const previousSelector = selectorNodes[i - 1].selector;
      const currentSelector = selectorNodes[i].selector;

      if (currentSelector.localeCompare(previousSelector) < 0) {
        // If no --fix flag, report a warning
        if (!postcssResult.stylelint.config.fix) {
          stylelint.utils.report({
            message: messages.unordered(currentSelector, previousSelector),
            node: selectorNodes[i],
            result: postcssResult,
            ruleName,
          });
        } else {
          const currentRule = selectorNodes[i];
          const previousRule = selectorNodes[i - 1];

          previousRule.before(currentRule);
          selectorNodes[i - 1] = currentRule;
          selectorNodes[i] = previousRule;
        }
      }
    }
  };
});
