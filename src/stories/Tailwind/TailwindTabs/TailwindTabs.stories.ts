import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TailwinTabs } from "./TailwindTabs";

const meta = {
    title: 'TAILWINDCSS/Tabs',
    component: TailwinTabs,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: 'select',
        options: ['default', 'vertical'],
      },
    },
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // args: { onClick: fn() },
  } satisfies Meta<typeof TailwinTabs>;
  
  export default meta;
  
  type Story = StoryObj<typeof meta>;

  export const Default: Story = {
    args: {
      children: 'Default Tabs',
    },
  };

  export const Vertical: Story = {
    args: {
      variant: 'vertical',
      children: 'Vertical Tabs',
    },
  };