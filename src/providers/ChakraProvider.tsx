'use client'

import { ChakraProvider as Provider } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { CacheProvider } from '@chakra-ui/next-js'

export function ChakraProvider({ children }: { children: ReactNode }) {
    return (
        <CacheProvider>
            <Provider>{children}</Provider>
        </CacheProvider>
    )
}
