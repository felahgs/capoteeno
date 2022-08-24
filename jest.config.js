// Jest configuration file
module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '/node_modules/',
    'src/stories',
    '/.next/',
    '/cypress/',
  ],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^pages(.*)$': '<rootDir>/pages$1',
    '^tests(.*)$': '<rootDir>/tests$1',
    '^styles(.*)$': '<rootDir>/styles$1',
    "^.+\\.svg$": "jest-svg-transformer",
  },
  collectCoverage: false,
  collectCoverageFrom: [
    'pages/**',
    'src/**/*.ts',
    'src/**/*.tsx',
    //ignored files
    '!pages/_app.tsx',
    '!pages/_document.tsx',
    '!src/stories/**',
    '!src/**/*.types.ts*',
    '!src/**/*.stories.ts*',
    '!src/**/*.style.ts*',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};