import type { StorybookConfig } from "@storybook/nextjs-vite";
import svgr from "vite-plugin-svgr";

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/nextjs-vite",
    "options": {}
  },
  "staticDirs": [
    "../public"
  ],
  "viteFinal": async (config) => {
    config.plugins = config.plugins || [];
    
    // 모든 SVG 파일을 React 컴포넌트로 처리
    config.plugins.push(svgr({
      svgrOptions: {
        icon: true,
        exportType: "named",
        namedExport: "ReactComponent",
      },
      include: "**/*.svg",
    }));

    return config;
  }
};
export default config;