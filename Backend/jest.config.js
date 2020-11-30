module.exports = {
    transform: {
        '\\.(ts|tsx)?$': 'ts-jest'
    },
    testEnvironment: 'node',
    testRegex: './src/.*\\.(test|spec)?\\.(ts|ts|tsx)$',
    moduleFileExtensions: ['ts', 'tsx'],
    roots: ["src"]
};