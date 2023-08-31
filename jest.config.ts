export default {
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    preset: 'ts-jest',
    transform: {},
    moduleNameMapper: {
        '\\.(css)$': 'identity-obj-proxy',
    },
    collectCoverageFrom: [
        'src/components/**/*.tsx',
        'src/pages/**/*.tsx',
        'src/common/**/*.ts',
    ],
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 90,
            lines: 90,
        },
    },
    coverageReporters: ['text', 'html'],
};
