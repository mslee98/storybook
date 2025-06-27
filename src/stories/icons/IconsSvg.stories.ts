import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import IconsSvg from './IconsSvg';

const meta = {
  title: 'Icons/SVG Gallery',
  component: IconsSvg,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
//   tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    docs: {
      description: {
        component: '모든 SVG 아이콘을 한 눈에 볼 수 있는 갤러리입니다. 아이콘을 클릭하면 이름이 복사됩니다.',
      },
    },
  },
} satisfies Meta<typeof IconsSvg>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

