import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TailwindHeaderMegaMenu } from "./TailwindHeaderMegaMenu";

const meta = {
    title: 'TAILWINDCSS/Header',
    component: TailwindHeaderMegaMenu,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof TailwindHeaderMegaMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Megamenu: Story = {
    args: {
        menuItems: [
            { 
                label: 'Products', 
                href: '/products',
                dropdownItems: [
                    { label: 'Product 1', href: '/products/1' },
                    { label: 'Product 2', href: '/products/2' },
                    { label: 'Product 3', href: '/products/3' }
                ]
            },
            { 
                label: 'Services', 
                href: '/services',
                dropdownItems: [
                    { label: 'Service 1', href: '/services/1' },
                    { label: 'Service 2', href: '/services/2' },
                    { label: 'Service 3', href: '/services/3' }
                ]
            }
        ]
    },
}; 