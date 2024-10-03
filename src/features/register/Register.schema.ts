import { z } from 'zod'

export const initialValues = {
    name: '',
    cellPhone: '',
    email: '',
    password: '',
}

export const validationSchema = z.object({
    name: z.string().min(1, { message: 'Campo obrigatório' }).max(50, { message: 'Máximo de 50 caracteres' }),
    cellPhone: z.string().min(1, { message: 'Campo obrigatório' }).regex(new RegExp('^\\(\\d{2}\\)\\s\\d{5}-\\d{4}$'), {
        message: 'Telefone inválido',
    }),
    email: z.string().email({ message: 'Preencha o campo de email corretamente' }),
    password: z
        .string()
        .min(1, { message: 'Campo obrigatório' })
        .min(8, 'Mínimo de 8 caracteres')
        .max(30, 'Máximo de 30 caracteres'),
})
