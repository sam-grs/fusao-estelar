import type { Preview } from '@storybook/react'
import path from 'node:path'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        options: {
            storySort: (a, b) => (a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true })),
        },
        webpackFinal: async (config: any) => {
            config.resolve.alias = {
                ...config.resolve.alias,
                lib: path.resolve(__dirname, '../lib'),
                styles: path.resolve(__dirname, '../styles'),
                app: path.resolve(__dirname, '../app'),
                props: path.resolve(__dirname, '../props'),
                routes: path.resolve(__dirname, '../routes'),
            }
            return config
        },
        docs: {
            autodocs: true,
        },
    },
}

export default preview
