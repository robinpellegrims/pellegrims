const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/**/*.{js,jsx,ts,tsx}'],
  coverageReporters: ['json'],
};
