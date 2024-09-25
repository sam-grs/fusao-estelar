module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'plugin:storybook/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    root: true,
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    },
}
