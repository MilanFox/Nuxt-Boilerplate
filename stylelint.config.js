const handAuthoredLengthUnitsThatArentPx = ['rem', 'ch', 'ex', 'lh', 'rlh', 'pt', 'pc', 'in', 'cm', 'mm', 'q'];

const kebabSegment = '[a-z0-9]+(-[a-z0-9]+)*';
const blockElementModifier = new RegExp(`^${kebabSegment}(__${kebabSegment})?(--${kebabSegment})?$`);

export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue/scss'],
  rules: {
    'selector-class-pattern': [
      blockElementModifier,
      {
        message: selector => `Class "${selector}" is not a BEM class. Expected block__element--modifier, `
          + 'each part lowercase kebab-case and the last two optional.',
      },
    ],
    'unit-disallowed-list': [
      handAuthoredLengthUnitsThatArentPx,
      {
        message: unit => `Unit "${unit}" is never hand-authored here. Write the length in px — the build converts `
          + 'it to rem (postcss-pxtorem in nuxt.config.ts), and hairlines stay px on purpose.',
      },
    ],
  },
};
