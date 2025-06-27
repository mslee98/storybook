import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TailwindHeader } from "./TailwindHeader";

const meta = {
    title: 'TAILWINDCSS/Header',
    component: TailwindHeader,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof TailwindHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Header'
    },
};
