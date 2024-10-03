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
    if (email !== user.email) throw { message: 'auth/user-not-found' }
    if (password !== user.password) throw { message: 'auth/wrong-password' }
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
        await signInWithEmailAndPassword(true, values.email, values.password)
        validationSchema.parse(values)

        return 'Usuário logado com sucesso!'
    } catch (error: any) {
        if (error instanceof ZodError) {
            return error.format()
        }
        if (error.message === 'auth/user-not-found') {
            return 'O usuário não existe.'
        }
        if (error.message === 'auth/wrong-password') {
            return 'Sua senha está incorreta.'
        }
    }
}

describe('Verificação do Login', () => {
    it('Quando o usuário existe', () => {
        expect(onSubmit(user)).toEqual('Usuário logado com sucesso!')
    })

    it('Quando o usuário não existe', () => {
        expect(onSubmit(userNotRegistered)).toEqual('O usuário não existe.')
    })

    it('Quando a senha está incorreta', () => {
        expect({ ...user, password: '12345668' }).toEqual('Sua senha está incorreta.')
    })

    it('Retornando os erros da validação de formulário', () => {
        expect({
            email: 'Preencha o campo email corretamente',
            password: 'Mínimo de 8 caracteres',
        }).toEqual(onSubmit(invalidUser))
    })
})
