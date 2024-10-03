import { FC, useState } from 'react'
import { Box, Button, Grid } from '@chakra-ui/react'
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
        formState: { errors },
    } = useForm<LoginProps>({
        resolver: zodResolver(validationSchema),
        defaultValues: initialValues,
    })

    const onSubmit: SubmitHandler<LoginProps> = (data: LoginProps) => {
        setIsLoading(true)
        try {
            const crendentials = signInWithEmailAndPassword(auth, data.email, data.password)
            console.log(crendentials)
            Alert({ message: 'Usuário logado!' })
        } catch (error: any) {
            if (error.message === 'auth/user-not-found') {
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
                    <FormInput
                        type="email"
                        placeholder="Digite seu email"
                        errors={errors.email}
                        {...register('email')}
                    />
                    <FormInput
                        type="password"
                        placeholder="Digite sua senha"
                        errors={errors.password}
                        {...register('password')}
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
