import { FC } from 'react'
import { Box } from '@chakra-ui/react'

import { CustomBox } from 'components/box'
import { footerStyles } from './Footer.styles'

export const Footer: FC = () => {
    return (
        <Box bg="black" color="light_gray" sx={footerStyles}>
            <CustomBox>
                <Box>Todos os direitos reservados</Box>
            </CustomBox>
        </Box>
    )
}
