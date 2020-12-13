module.exports = {
    transform: {
        '^.+\\.ts?$': 'ts-jest'
    },
    testEnvironment: 'node',
    testRegex: './src/.*\\.(test|spec)?\\.(ts|ts|tsx)$',
    moduleFileExtensions: ['json','js', 'ts', 'tsx'],
    roots: ["src"]
};