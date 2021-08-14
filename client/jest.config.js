module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1', // ~ 경로로 import하는것들 변환해줌
  },
  setupFilesAfterEnv: ['<rootDir>/src/setUpTests.ts'],
};
