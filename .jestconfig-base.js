'use strict';

const config = {
  setupTestFrameworkScriptFile: './.jestsetuptestframework.js',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.js', '**/*.jest.js'],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  coverageDirectory: process.env.COVERDIR,
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
};

module.exports = config;
