import { FC, useState } from 'react'
import { Box, Button, Grid, Heading, Input } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { z } from 'zod'

import { Alert, CustomBox, FormInput } from 'components'
import { validationSchema, initialValues } from './Login.schema'
import { auth } from 'lib'
import { LoginStyles } from './Login.styles'

export type LoginProps = z.infer<typeof validationSchema>

export const Login: FC = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<LoginProps>({
        resolver: zodResolver(validationSchema),
        defaultValues: initialValues,
    })

    const onSubmit: SubmitHandler<LoginProps> = async (data: LoginProps) => {
        setIsLoading(true)
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            Alert({ message: 'Usuário logado!' })
        } catch (error: any) {
            if (error.message === 'auth/user-not-found' || error.message === 'auth/invalid-credential') {
                Alert({ message: 'O usuário não existe', type: 'error' })
            }
            if (error.message === 'auth/wrong-password') {
                Alert({ message: 'Sua senha está incorreta.', type: 'error' })
            }

            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Grid templateColumns="repeat(2, 1fr)">
            <Box bg="blue_black" height="100vh" />

            <form onSubmit={handleSubmit(onSubmit)}>
                <CustomBox sx={LoginStyles.box}>
                    <Heading fontSize="3xl" textAlign="center" color="blue_black" mb={6}>
                        Login
                    </Heading>
                    <FormInput
                        name="email"
                        control={control}
                        type="email"
                        placeholder="Digite seu email"
                        errors={errors.email}
                    />
                    <FormInput
                        name="password"
                        control={control}
                        type="password"
                        placeholder="Digite sua senha"
                        errors={errors.password}
                    />
                    <Box display="flex" justifyContent="space-between" gap={4} mt={4}>
                        <Button width="100%" type="submit" bg="blue_black" color="light_gray">
                            Enviar
                        </Button>
                    </Box>
                </CustomBox>
            </form>
        </Grid>
    )
}
