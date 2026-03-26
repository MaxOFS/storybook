import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../src/stories/overview.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],

  addons: ['@storybook/addon-links', '@storybook/addon-docs'],

  framework: {
    name: '@storybook/angular',
    options: {
      tsConfig: './tsconfig.json', 
    },
  },

  staticDirs: ['../src/assets', './public'],

  typescript: {
    check: false,
  }
};

export default config;