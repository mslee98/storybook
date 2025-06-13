import type { Preview } from '@storybook/nextjs-vite'
import '../src/app/globals.css';
import { useEffect } from 'react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light Mode" },
          { value: "dark", title: "Dark Mode" },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      useEffect(() => {
        const html = document.documentElement;
        if (context.globals.theme === "dark") {
          html.classList.add("dark");
        } else {
          html.classList.remove("dark");
        }
      }, [context.globals.theme]);

      return Story();
    },
  ],
};

export default preview;