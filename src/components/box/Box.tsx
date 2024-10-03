import { FC, ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

type BoxProps = {
    children: ReactNode
    sx?: any
}

export const CustomBox: FC<BoxProps> = ({ children, sx }) => {
    return (
        <Box
            maxW={1440}
            m="auto"
            position="relative"
            width="100%"
            height="100%"
            boxSize="border-box"
            py={{ base: 8, md: 10 }}
            px={{ base: 4, md: 8 }}
            sx={sx}
        >
            {children}
        </Box>
    )
}
