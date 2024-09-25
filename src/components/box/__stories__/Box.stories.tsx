import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '../Box'

const storyBox: Meta<typeof Box> = {
    title: 'Components/Box',
    component: Box,
}

export default storyBox
type Story = StoryObj<typeof Box>

export const StoryBox: Story = {
    render: (args) => (
        <Box sx={{ background: '#A0EB85' }} {...args}>
            <div style={{ background: 'white', height: 200 }}></div>
        </Box>
    ),
}
