import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from '../Alert'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const storyAlert: Meta<typeof Alert> = {
    title: 'Components/Alert',
    component: Alert,
    argTypes: {
        type: {
            options: ['success', 'error', 'info'],
            control: { type: 'select' },
        },
    },
}

export default storyAlert
type Story = StoryObj<typeof Alert>

export const StoryInput: Story = {
    render: (args) => (
        <>
            <Alert {...args} />
            <ToastContainer />
        </>
    ),
    args: {
        type: 'success',
        message: 'Alerta',
    },
}
