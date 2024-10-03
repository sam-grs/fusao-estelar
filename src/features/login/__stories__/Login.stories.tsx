import type { Meta, StoryObj } from '@storybook/react'
import { Login } from '../Login'

const storyLogin: Meta<typeof Login> = {
    title: 'Components/Login',
    component: Login,
}

export default storyLogin
type Story = StoryObj<typeof Login>

export const StoryLogin: Story = {
    render: (args) => <Login {...args} />,
}
