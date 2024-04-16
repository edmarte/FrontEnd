import { Meta, StoryObj } from "@storybook/vue3"
import Item from "../components/Item.vue"

const meta = {
    title: 'Lib/Item',
    component: Item
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}