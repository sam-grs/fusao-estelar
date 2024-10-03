import { FC } from 'react'
import { Box } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'

import { Routes } from 'routes'
import { CustomBox } from 'components/box'
import { headerStyles } from './Header.styles'

export const Header: FC = () => {
    return (
        <Box bg="blue_black" color="light_gray" sx={headerStyles}>
            <CustomBox>
                <Link as={NextLink} href={Routes.home}>
                    Logo
                </Link>
                <Box>
                    <Link as={NextLink} href={Routes.listagem}>
                        Veja mais
                    </Link>
                    <Link as={NextLink} href={Routes.login}>
                        Entrar
                    </Link>
                </Box>
            </CustomBox>
        </Box>
    )
}
