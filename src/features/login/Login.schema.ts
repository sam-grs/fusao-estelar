import { z } from 'zod'

export const initialValues = {
    email: '',
    password: '',
}

export const validationSchema = z.object({
    email: z.string().email({ message: 'Preencha o campo de email corretamente' }),
    password: z
        .string()
        .min(1, { message: 'Campo obrigatório' })
        .min(8, 'Mínimo de 8 caracteres')
        .max(30, 'Máximo de 30 caracteres'),
})
