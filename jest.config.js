module.exports = {
    preset: 'jest-preset-angular',
    testEnvironment: 'jsdom',
    globals: {
        isolatedModules: true
    },
    roots: ['src'],
    setupFilesAfterEnv: ['./src/setup-jest.ts'],
    reporters: ['default', 'jest-junit'],
    collectCoverage: false,
    collectCoverageFrom: [
        '**/src/**/*.ts',
        '!**/node_modules/**',
        '!**/src/main.ts',
        '!**/src/jestGlobalMocks.ts',
        '!**/src/**/*.module.ts',
        '!**/polyfills.ts',
        '!**/environments/**',
        '!**/src/setupJest.ts',
        '!**/index.ts',
        '!**/*.token.ts',
        '!**/*.config.ts'
    ],
    testPathIgnorePatterns: ['/node_modules/', '/src/environments/'],
    moduleDirectories: ['.', 'src', 'node_modules'],
};
