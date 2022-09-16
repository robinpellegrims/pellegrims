module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'cotersus',
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
