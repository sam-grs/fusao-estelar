import React from 'react'
import type { Preview } from '@storybook/react'

import { ChakraProvider } from '../src/providers'

const preview: Preview = {
    decorators: [
        (Story) => (
            <ChakraProvider>
                <Story />
            </ChakraProvider>
        ),
    ],

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
    },
}

export default preview
