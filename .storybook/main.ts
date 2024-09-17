import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
    stories: [
        '../app/components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
        '../app/features/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    ],
    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    staticDirs: ['..\\public'],
}
export default config
