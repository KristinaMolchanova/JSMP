module.exports = {
    transform: {
        '^.+\\.ts?$': 'ts-jest'
    },
    testEnvironment: 'node',
    testRegex: './src/.*\\.(test|spec)?\\.(ts|tsx)$',
    moduleFileExtensions: ['ts', 'tsx'],
    roots: ["src"]
};