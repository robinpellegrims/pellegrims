export = {
  plugins: [
    '@angular-eslint/template',
    'eslint-plugin-angular-template-consistent-this',
  ],
  extends: ['plugin:@angular-eslint/template/recommended'],
  rules: {
    'angular-template-consistent-this/eslint-plugin-angular-template-consistent-this':
      ['error', { properties: 'implicit' }],
  },
};
