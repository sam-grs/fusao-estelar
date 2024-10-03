import { ZodError } from 'zod'
import { validationSchema } from './Login.schema'

type LoginProps = {
    email: string
    password: string
}

const user: LoginProps = {
    email: 'email@gmail.com',
    password: '12345678',
}

const userNotRegistered: LoginProps = {
    email: 'user-not-registered@gmail.com',
    password: '12345678',
}

const invalidUser: LoginProps = {
    email: 'email_invalido',
    password: '123',
}

function signInWithEmailAndPassword(auth: boolean, email: string, password: string) {
    if (email !== user.email || !invalidUser) throw new Error('auth/user-not-found')
    if (password !== user.password || !invalidUser) throw new Error('auth/wrong-password')
    else {
        const data = {
            auth: auth,
            token: 1,
            email: email,
            password: password,
        }
        return data
    }
}

const onSubmit = async (values: LoginProps) => {
    try {
        await validationSchema.parse(values)
        await signInWithEmailAndPassword(true, values.email, values.password)

        return 'Usuário logado com sucesso!'
    } catch (error: any) {
        if (error instanceof ZodError) {
            const formattedErrors: any = error.format()
            throw {
                email: formattedErrors.email,
                password: formattedErrors.password,
            }
        }
        if (error.message === 'auth/user-not-found') {
            throw 'O usuário não existe.'
        }
        if (error.message === 'auth/wrong-password') {
            throw 'Sua senha está incorreta.'
        }
    }
}

describe('Verificação do Login', () => {
    it('Quando o usuário existe', () => {
        expect(onSubmit(user)).resolves.toEqual('Usuário logado com sucesso!')
    })

    it('Quando o usuário não existe', () => {
        expect(onSubmit(userNotRegistered)).rejects.toEqual('O usuário não existe.')
    })

    it('Quando a senha está incorreta', () => {
        expect(onSubmit({ ...user, password: '12345668' })).rejects.toEqual('Sua senha está incorreta.')
    })

    it('Retornando os erros da validação de formulário', () => {
        expect(onSubmit(invalidUser)).rejects.toEqual({
            email: { _errors: ['Preencha o campo de email corretamente'] },
            password: { _errors: ['Mínimo de 8 caracteres'] },
        })
    })
})
