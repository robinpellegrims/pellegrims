/* eslint-disable */
export default {
  displayName: 'pellegrims-dev-ui-atoms',
  preset: '../../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/pellegrims-dev/ui/atoms',
};
