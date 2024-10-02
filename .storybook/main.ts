import type { StorybookConfig } from '@storybook/nextjs'
import path from 'node:path'

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        // '@storybook/addon-mdx-gfm',
    ],

    framework: {
        name: '@storybook/nextjs',
        options: {},
    },

    staticDirs: ['../public'],
    typescript: {
        // reactDocgen: 'react-docgen-typescript',
    },

    webpackFinal: async (config: any) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            lib: path.resolve(__dirname, '../lib'),
            components: path.resolve(__dirname, '../components'),
            app: path.resolve(__dirname, '../app'),
            // styles: path.resolve(__dirname, '../styles'),
            // props: path.resolve(__dirname, '../props'),
            routes: path.resolve(__dirname, '../routes'),
        }

        return config
    },

    docs: {
        autodocs: true,
    },

    refs: {
        '@chakra-ui/react': {
            disable: true,
        },
    },
}

export default config
