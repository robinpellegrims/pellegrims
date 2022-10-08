export = {
  plugins: ['ngrx'],
  extends: ['plugin:ngrx/recommended'],
  rules: {
    'ngrx/avoid-cyclic-effects': 'error',
    'ngrx/avoid-mapping-selectors': 'error',
    'ngrx/good-action-hygiene': 'error',
    'ngrx/no-effect-decorator': 'error',
    'ngrx/no-typed-global-store': 'error',
    'ngrx/on-function-explicit-return-type': 'error',
    'ngrx/prefer-effect-callback-in-block-statement': 'off',
    'ngrx/prefer-inline-action-props': 'off',
    'ngrx/select-style': 'error',
    'ngrx/updater-explicit-return-type': 'error',
    'ngrx/use-consistent-global-store-name': ['error', 'store$'],
  },
};
