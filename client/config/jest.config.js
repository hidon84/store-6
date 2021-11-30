module.exports = {
  rootDir: '../',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1', // ~ 경로로 import하는것들 변환해줌
  },
  transform: {
    '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setUpTests.ts'],
};
