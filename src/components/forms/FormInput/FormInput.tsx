import { FC } from 'react'
import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
import { Controller } from 'react-hook-form'

type FormInputProps = {
    placeholder: string
    errors: any
    type?: 'text' | 'email' | 'password' | 'date'
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    name: string
    control: any
}

export const FormInput: FC<FormInputProps> = ({ placeholder, errors, type = 'text', size = 'md', name, control }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <FormControl isInvalid={!!errors}>
                    <Input size={size} type={type} placeholder={placeholder} {...field} />
                    <FormErrorMessage sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {errors?.message}
                    </FormErrorMessage>
                </FormControl>
            )}
        />
    )
}
