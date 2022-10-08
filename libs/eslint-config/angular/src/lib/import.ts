export = {
  plugins: ['import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:import/typescript'],
    },
  ],
  rules: { 'import/no-deprecated': 'warn' },
};
