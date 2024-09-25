import { FC, ReactNode } from 'react'
import { Box as BoxUi } from '@chakra-ui/react'

type BoxProps = {
    children: ReactNode
    sx?: any
}

export const Box: FC<BoxProps> = ({ children, sx }) => {
    return (
        <BoxUi
            maxW={1440}
            m="auto"
            position="relative"
            w="100%"
            h="100%"
            boxSize="border-box"
            py={{ base: 8, md: 10 }}
            px={{ base: 4, md: 8 }}
            sx={sx}
        >
            {children}
        </BoxUi>
    )
}
