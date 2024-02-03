module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'eslint-config-base',
        'eslint-config-angular',
        'nx-remotecache-s3',
        'nx-vercel',
      ],
    ],
  },
};
