const { pathsToModuleNameMapper } = require('ts-jest/utils');

const { compilerOptions } = require('./tsconfig.json');
const paths = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>/',
});

const ignorePatterns = [
  'node_modules',
  '\\.cache',
  '<rootDir>/build',
  '<rootDir>/dist',
  '<rootDir>/coverage',
  '<rootDir>/.temp',
  '<rootDir>/temp',
  '.temp',
  'temp',
];

/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json-summary', 'lcov', 'text', 'clover'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    ...paths,
  },
  testPathIgnorePatterns: [...ignorePatterns],
  watchPathIgnorePatterns: [...ignorePatterns],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  setupFiles: ['<rootDir>/jest.env.setup.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
