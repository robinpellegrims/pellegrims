module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'pellegrims-dev',
        'eslint-config',
        'nx-remotecache-s3',
        'markdown',
        'goldgetters',
        'shared',
        'shared-ui-atoms',
        'shared-test',
      ],
    ],
  },
};
