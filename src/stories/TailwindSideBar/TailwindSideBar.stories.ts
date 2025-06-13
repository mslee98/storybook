import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TailwindSideBar } from "./TailwindSideBar";

const meta = {
    title: 'Components/TailwindSideBar',
    component: TailwindSideBar,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof TailwindSideBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Hello',
        size: 'desktop',
    },
};