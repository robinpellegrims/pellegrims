const nxPreset = require('@nrwl/jest/preset');

module.exports = {
  ...nxPreset,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/**/*.{js,jsx,ts,tsx}'],
  coverageReporters: ['json'],
};
