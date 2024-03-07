/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  projects: ['<rootDir>/packages/bod'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['json-summary', 'lcov', 'text', 'clover'],
}
