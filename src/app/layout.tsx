import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { ChakraProvider } from 'providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Fusão Estelar',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <html lang="pt-br">
            <body className={inter.className}>
                <ChakraProvider>{children}</ChakraProvider>
            </body>
        </html>
    )
}
