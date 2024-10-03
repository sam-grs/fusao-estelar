/** @type {import('ts-jest').JestConfigWithTsJest} **/

/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest'

const config: Config = {
    // Automatically clear mock calls, instances, contexts and results before every test
    clearMocks: true,
    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,
    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',
    // Indicates which provider should be used to instrument code for coverage
    coverageProvider: 'v8',

    // More for configuration
    // https://kulshekhar.github.io/ts-jest/docs/getting-started/options/
    testEnvironment: 'node',
    preset: 'ts-jest',
    verbose: true,
    transform: {
        '^.+.tsx?$': ['ts-jest', {}],
    },
}

export default config
