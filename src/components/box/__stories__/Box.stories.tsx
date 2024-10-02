import type { Meta, StoryObj } from '@storybook/react'
import { CustomBox } from '../Box'

const storyCustomBox: Meta<typeof CustomBox> = {
    title: 'Components/CustomBox',
    component: CustomBox,
}

export default storyCustomBox
type Story = StoryObj<typeof CustomBox>

export const StoryCustomBox: Story = {
    render: (args) => (
        <CustomBox sx={{ background: '#A0EB85' }} {...args}>
            <div style={{ background: 'white', height: 200 }}></div>
        </CustomBox>
    ),
}
