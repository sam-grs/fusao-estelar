'use client'

import { ChakraProvider as Provider } from '@chakra-ui/react'
import { ReactNode } from 'react'

export function ChakraProvider({ children, theme }: { children: ReactNode; theme: any }) {
    return <Provider theme={theme}>{children}</Provider>
}
