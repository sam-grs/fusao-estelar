import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from '../Footer'

const storyFooter: Meta<typeof Footer> = {
    title: 'Components/Footer',
    component: Footer,
}

export default storyFooter
type Story = StoryObj<typeof Footer>

export const StoryFooter: Story = {
    render: (args) => <Footer {...args} />,
}
