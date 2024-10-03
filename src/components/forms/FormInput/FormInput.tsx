import { FC } from 'react'
import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react'

type FormInputProps = {
    placeholder: string
    errors: any
    type?: 'text' | 'email' | 'password' | 'date'
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export const FormInput: FC<FormInputProps> = ({ placeholder, errors, type = 'text', size = 'md' }) => {
    return (
        <FormControl isInvalid={!!errors}>
            <Input size={size} type={type} placeholder={placeholder} />
            <FormErrorMessage sx={{ display: 'flex', justifyContent: 'flex-end' }}>{errors?.message}</FormErrorMessage>
        </FormControl>
    )
}
