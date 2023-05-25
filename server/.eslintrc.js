module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
        ecmaVersion: 'latest',
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier'],
    root: true,
    env: {
        node: true,
        es6: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {},
};
