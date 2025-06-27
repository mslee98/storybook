import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TailwindTable } from "./Table";

const meta = {
    title: 'TAILWINDCSS/Table',
    component: TailwindTable,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
  } satisfies Meta<typeof TailwindTable>;
  
  export default meta;
  
  type Story = StoryObj<typeof meta>;

  export const Default: Story = {
    args: {
      children: 'Table'
    },
  };