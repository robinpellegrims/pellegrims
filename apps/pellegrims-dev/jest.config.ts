/* eslint-disable */
export default {
  displayName: 'pellegrims-dev',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/next/babel'] }],
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/', 'jest-runner'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/pellegrims-dev',
};
