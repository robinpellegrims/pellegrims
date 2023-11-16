module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'pellegrims-dev',
        'pellegrims-dev-e2e',
        'eslint-config-base',
        'eslint-config-angular',
        'nx-remotecache-s3',
        'markdown',
        'shared',
        'shared-ui-atoms',
        'shared-test',
        'nx-vercel',
      ],
    ],
  },
};
