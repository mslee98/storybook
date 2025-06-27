import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DeviceMockup } from "./DeviceMockup";

const meta = {
    title: 'TAILWINDCSS/DeviceMockUp',
    component: DeviceMockup,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
      size: {
        control: 'select',
        options: ['watch', 'mobile', 'tablet', 'laptop'],
      },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // args: { onClick: fn() },
  } satisfies Meta<typeof DeviceMockup>;
  
  export default meta;
  
  type Story = StoryObj<typeof meta>;

  export const Watch: Story = {
    args: {
      children: 'Watch',
      size: 'watch',
    },
  };

  export const Mobile: Story = {
    args: {
      children: 'Mobile',
      size: 'mobile',
    },
  };

  export const Tablet: Story = {
    args: {
      children: 'Tablet',
      size: 'tablet',
    },
  };

  export const Laptop: Story = {
    args: {
      children: 'Laptop',
      size: 'laptop',
    },
  };


