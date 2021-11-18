export = {
  plugins: ['@angular-eslint'],
  extends: ['@angular-eslint/recommended'],
  rules: {
    '@angular-eslint/use-lifecycle-interface': 'error',
    '@angular-eslint/use-component-view-encapsulation': 'error',
    '@angular-eslint/prefer-on-push-component-change-detection': 'warn',
  },
};
