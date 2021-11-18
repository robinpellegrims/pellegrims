export = {
  plugins: ['rxjs-angular'],
  rules: {
    'rxjs-angular/prefer-async-pipe': 'warn',
    'rxjs-angular/prefer-takeuntil': [
      'error',
      { alias: ['untilDestroyed', 'take'] },
    ],
  },
};
