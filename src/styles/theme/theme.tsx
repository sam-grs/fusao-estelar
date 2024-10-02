import { extendTheme } from '@chakra-ui/react'

const colors = {
    black: '#1A1423',
    light_gray: '#E4DEE4',
}

export const theme = extendTheme({
    colors,
    fonts: {
        heading: "'Poppins', sans-serif",
        body: "'Roboto', sans-serif",
    },
    styles: {
        global: {
            'html, body': {
                backgroundColor: 'gray.100',
                color: 'gray.900',
            },
        },
    },
})
