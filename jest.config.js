/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
const { compilerOptions } = require('./tsconfig.json');
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const paths = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>/',
});

module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json-summary', 'lcov', 'text', 'clover'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    ...paths,
  },
  testPathIgnorePatterns: [
    'node_modules',
    '\\.cache',
    '<rootDir>.*/build',
    '<rootDir>.*/dist',
    '<rootDir>.*/coverage',
  ],
  setupFiles: ['<rootDir>/jest.env.setup.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
