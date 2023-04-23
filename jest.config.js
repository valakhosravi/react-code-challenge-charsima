module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    transformIgnorePatterns: [
        "/node_modules/(?!your-module-to-be-transformed).+\\.js$",
    ],
    transform: {
        "^.+\\.jsx?$": "babel-jest",
        "^.+\\.tsx?$": "ts-jest",
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**', '!**/vendor/**'],
    coveragePathIgnorePatterns: ['/node_modules/', '/src/index.tsx'],
    coverageReporters: ['text', 'lcov', 'cobertura'],
};