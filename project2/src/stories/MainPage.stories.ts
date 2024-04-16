import { Meta, StoryObj } from "@storybook/vue3";
import MainPage from "../components/MainPage.vue";

const meta = {
    title: 'Lib/MainPage',
    component: MainPage
} satisfies Meta<typeof MainPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}