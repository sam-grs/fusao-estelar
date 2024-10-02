import { FC } from 'react'
import { Box } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

import { CustomBox } from 'components/box'
import { footerStyles } from './Footer.styles'

export const Footer: FC = () => {
    return (
        <Box sx={footerStyles}>
            <CustomBox>
                <Box>Todos os direitos reservados</Box>
            </CustomBox>
        </Box>
    )
}
