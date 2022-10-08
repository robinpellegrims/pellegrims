export = {
  plugins: ['rxjs'],
  extends: ['plugin:rxjs/recommended'],
  rules: {
    'rxjs/no-implicit-any-catch': 'error',
    'rxjs/no-unbound-methods': 'error',
    'rxjs/no-unsafe-switchmap': 'error',
    'rxjs/finnish': [
      'error',
      {
        functions: false,
        methods: false,
        parameters: false,
        strict: true,
      },
    ],
  },
};
