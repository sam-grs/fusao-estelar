'use client'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { ChakraProvider } from 'providers'
import { theme } from 'styles'
import { Footer, Header } from 'components'
import { Routes } from 'routes'

export function Layout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    const pathname = usePathname()
    const auth = Array(Routes.login, Routes.register, Routes.recoverPassword).includes(pathname)

    return (
        <html lang="pt-br">
            <body>
                <ChakraProvider theme={theme}>
                    <ToastContainer />
                    {!auth ? (
                        <>
                            <Header />
                            <main style={{ paddingTop: '100px' }}> {children}</main>
                            <Footer />
                        </>
                    ) : (
                        <main>{children}</main>
                    )}
                </ChakraProvider>
            </body>
        </html>
    )
}
