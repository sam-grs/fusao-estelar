import { FC, useState } from 'react'
import { Box, Button, Grid, Heading } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { z } from 'zod'
import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'

import { Alert, CustomBox, FormInput } from 'components'
import { validationSchema, initialValues } from './Register.schema'
import { boxStyles } from './Register.styles'
import { auth } from 'lib'
import { Routes } from 'routes'

export type RegisterProps = z.infer<typeof validationSchema>

export const Register: FC = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<RegisterProps>({
        resolver: zodResolver(validationSchema),
        defaultValues: initialValues,
    })

    const onSubmit: SubmitHandler<RegisterProps> = (data: RegisterProps) => {
        setIsLoading(true)
        try {
            const crendentials = createUserWithEmailAndPassword(auth, data.email, data.password)
            console.log(crendentials)
            Alert({ message: 'Seus dados foram cadastrados!' })
        } catch (error: any) {
            if (error.message === 'auth/email-already-exists') {
                Alert({ message: 'Email já cadastrado', type: 'error' })
            }

            // if (error.message === 'auth/phone-number-already-exists') {
            //     Alert({ message: 'O número de telefone já foi cadastrado.', type: 'error' })
            // }

            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Grid templateColumns="repeat(2, 1fr)">
            <Box bg="blue_black" height="100vh" />

            <form onSubmit={handleSubmit(onSubmit)}>
                <CustomBox sx={boxStyles}>
                    <Heading fontSize="3xl" textAlign="center" color="blue_black" mb={6}>
                        Registro
                    </Heading>
                    <FormInput name="name" control={control} placeholder="Digite seu nome" errors={errors.name} />
                    <FormInput
                        name="cellPhone"
                        control={control}
                        placeholder="Digite seu celular"
                        errors={errors.cellPhone}
                    />
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
                        <Link w="100%" as={NextLink} href={Routes.login}>
                            <Button w="100%" variant="outline" color="blue_black">
                                Voltar
                            </Button>
                        </Link>

                        <Button w="100%" type="submit" bg="blue_black" color="light_gray">
                            Enviar
                        </Button>
                    </Box>
                </CustomBox>
            </form>
        </Grid>
    )
}
