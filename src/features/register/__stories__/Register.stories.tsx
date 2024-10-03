import type { Meta, StoryObj } from '@storybook/react'
import { Register } from '../Register'

const storyRegister: Meta<typeof Register> = {
    title: 'Components/Register',
    component: Register,
}

export default storyRegister
type Story = StoryObj<typeof Register>

export const StoryRegister: Story = {
    render: (args) => <Register {...args} />,
}
