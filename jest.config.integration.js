module.exports = {
  preset: 'jest-preset-angular',
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov'],
  roots: ['<rootDir>/src/'],
  testMatch: ['<rootDir>/src/**/?(*.)(it).ts?(x)'],
}
