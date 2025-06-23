import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TailwinTimeline } from "./TailwindTimeline";

const meta = {
  title: 'TAILWINDCSS/Timeline',
  component: TailwinTimeline,
  tags: ['autodocs'],
  parameters: {
      layout: 'centered',
      argTypes: {
        children: {
          control: 'text',
          variant: 'default | vertical',
        },
      },
  },
} satisfies Meta<typeof TailwinTimeline>;
  
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Tabs',
    variant: 'default',
  },
};

export const Vertical: Story = {
  args: {
    children: 'Default Tabs',
    variant: 'vertical',
  },
};