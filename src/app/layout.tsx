import { ReactNode } from 'react'
import type { Metadata } from 'next'

import { Layout } from './client-layout'

export const metadata: Metadata = {
    title: 'Fusão Estelar',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return <Layout>{children}</Layout>
}
