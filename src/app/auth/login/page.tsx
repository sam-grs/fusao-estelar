'use client'
import { Link } from '@chakra-ui/next-js'

export default function Login() {
    return (
        <>
            <h1>Login</h1>
            <Link href="/auth/registro" color="blue.400" _hover={{ color: 'blue.500' }}>
                Não possui uma conta?
            </Link>
        </>
    )
}
