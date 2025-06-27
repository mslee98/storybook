import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TailwindPopOver } from "./TailwindPopOver";

const meta = {
  title: 'TAILWINDCSS/PopOver',
  component: TailwindPopOver,
  tags: ['autodocs'],
  parameters: {
      layout: 'centered',
      argTypes: {
        children: {
          control: 'text',
          variant: 'login',
        },
      },
  },
} satisfies Meta<typeof TailwindPopOver>;
  
export default meta;

type Story = StoryObj<typeof meta>;

export const LoginPopOver: Story = {
  args: {
    children: 'Login PopOver',
    variant: 'login',
  },
};