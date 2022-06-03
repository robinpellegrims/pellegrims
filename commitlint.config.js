module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'scope-enum': [
      2,
      'always',
      ['pellegrims-dev', 'eslint-config', 'nx-remotecache-s3', 'markdown'],
    ],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
  },
};
