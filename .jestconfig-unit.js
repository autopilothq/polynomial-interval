'use strict';

const baseConfig = require('./.jestconfig-base.js');

const config = Object.assign({}, baseConfig, {
  testMatch: ['**/__tests__/**/*.unit.js', '**/*.unit.jest.js'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
});

module.exports = config;
