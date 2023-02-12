const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

const paths = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>/',
});

const ignorePatterns = [
  'node_modules',
  '\\.cache',
  '<rootDir>.*/build',
  '<rootDir>.*/dist',
  '<rootDir>.*/coverage',
  '<rootDir>.*/temp',
  '<rootDir>.*/.temp',
];

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: 'node',
  moduleNameMapper: {
    ...paths,
  },
  testPathIgnorePatterns: [...ignorePatterns],
  watchPathIgnorePatterns: [...ignorePatterns],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
      },
    ],
  },
  setupFiles: ['<rootDir>/jest.env.setup.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
