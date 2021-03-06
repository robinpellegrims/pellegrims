export = {
  extends: ['eslint:recommended'],
  rules: {
    'arrow-body-style': ['error'],
    'arrow-parens': ['off', 'always'],
    'brace-style': ['off', 'off'],
    'comma-dangle': 'off',
    complexity: 'error',
    curly: 'error',
    'eol-last': 'off',
    eqeqeq: ['error', 'always'],
    'guard-for-in': 'error',
    'id-blacklist': 'off',
    'id-length': ['error', { exceptions: ['_'] }],
    'id-match': 'off',
    'linebreak-style': 'off',
    'max-classes-per-file': 'error',
    'max-len': 'off',
    'max-params': 'warn',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-console': ['error', { allow: ['error', 'warn'] }],
    'no-duplicate-imports': 'off',
    'no-eval': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'off',
    'no-irregular-whitespace': 'off',
    'no-magic-numbers': ['warn', { ignore: [-1, 0, 1] }],
    'no-multiple-empty-lines': 'off',
    'no-nested-ternary': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'error',
    'no-prototype-builtins': 'error',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@ngneat/spectator',
            message: "Use '@ngneat/spectator/jest' instead. ",
          },
        ],
      },
    ],
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'off',
    'no-undef-init': 'error',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-object-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed'],
    radix: 'error',
    'space-before-function-paren': 'off',
    'space-in-parens': ['off', 'never'],
    'spaced-comment': [
      'error',
      'always',
      { block: { exceptions: ['*'] }, markers: ['/'] },
    ],
  },
};
