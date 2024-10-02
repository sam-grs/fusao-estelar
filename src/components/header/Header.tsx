import { FC } from 'react'
import { Box } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

import { Routes } from 'routes'
import { CustomBox } from 'components/box'
import { headerStyles } from './Header.styles'

export const Header: FC = () => {
    return (
        <Box sx={headerStyles}>
            <CustomBox>
                <Link href={Routes.home}>Logo</Link>
                <Box>
                    <Link href={Routes.listagem}>Veja mais</Link>
                    <Link href={Routes.login}>Entrar</Link>
                </Box>
            </CustomBox>
        </Box>
    )
}
