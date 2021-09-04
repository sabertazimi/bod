/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  projects: ['<rootDir>/packages/bod/jest.config.js'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['json-summary', 'lcov', 'text', 'clover'],
};
