import type { Meta, StoryObj } from '@storybook/react'
import { Header } from '../Header'

const storyHeader: Meta<typeof Header> = {
    title: 'Components/Header',
    component: Header,
}

export default storyHeader
type Story = StoryObj<typeof Header>

export const StoryHeader: Story = {
    render: (args) => <Header {...args} />,
}
