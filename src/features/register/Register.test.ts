import { ZodError } from 'zod'
import { validationSchema } from './Register.schema'

type RegisterProps = {
    name: string
    cellPhone: string
    email: string
    password: string
}

const user: RegisterProps = {
    name: 'Usuário',
    cellPhone: '(99) 9999-9999',
    email: 'email@gmail.com',
    password: '12345678',
}

const newUser: RegisterProps = {
    name: 'Usuário novo',
    cellPhone: '(99) 9999-9999',
    email: 'new-user@gmail.com',
    password: '12345678',
}

const invalidUser: RegisterProps = {
    name: '',
    cellPhone: '1234',
    email: 'email_invalido',
    password: '123',
}

function createUserWithEmailAndPassword(auth: boolean, email: string, password: string) {
    if (email === user.email) throw new Error('auth/email-already-exists')
    else {
        const data = {
            auth: auth,
            id: 1,
            email: email,
            password: password,
        }
        return data
    }
}

const onSubmit = async (values: RegisterProps) => {
    try {
        await validationSchema.parse(values)
        await createUserWithEmailAndPassword(true, values.email, values.password)

        return 'Usuário cadastrado com sucesso!'
    } catch (error: any) {
        if (error instanceof ZodError) {
            const formattedErrors: any = error.format()
            throw {
                name: formattedErrors.name,
                cellPhone: formattedErrors.cellPhone,
                email: formattedErrors.email,
                password: formattedErrors.password,
            }
        }
        if (error.message === 'auth/email-already-exists') {
            throw 'Email já cadastrado.'
        }
    }
}

describe('Verificação do Registro', () => {
    it('Criando o usuário', () => {
        expect(onSubmit(newUser)).resolves.toEqual('Usuário cadastrado com sucesso!')
    })

    it('Retornando os erros de validação de formulário', () => {
        expect(onSubmit(invalidUser)).rejects.toEqual({
            name: { _errors: ['Campo obrigatório'] },
            cellPhone: { _errors: ['Telefone inválido'] },
            email: { _errors: ['Preencha o campo de email corretamente'] },
            password: { _errors: ['Mínimo de 8 caracteres'] },
        })
    })

    it('Usuário já existe', () => {
        expect(onSubmit(user)).rejects.toEqual('Email já cadastrado.')
    })
})
