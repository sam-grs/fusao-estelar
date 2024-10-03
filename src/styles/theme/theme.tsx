import { extendTheme } from '@chakra-ui/react'

const colors = {
    blue_black: '#1A1423',
    light_gray: '#E4DEE4',
    white_color: '#f1faff',
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
                backgroundColor: 'white_color',
                color: 'blue_black',
            },
        },
    },
})
