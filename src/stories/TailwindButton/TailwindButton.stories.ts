import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TailwindButton } from "./TailwindButton";

const meta = {
    title: 'Components/TailwindButton',
    component: TailwindButton,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
      variant: {
        control: 'select',
        options: ['primary', 'secondary', 'outline'],
      },
      size: {
        control: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // args: { onClick: fn() },
  } satisfies Meta<typeof TailwindButton>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Primary: Story = {
    args: {
      children: 'Primary Button',
      variant: 'primary',
      size: 'md',
    },
  };
