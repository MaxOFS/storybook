import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
  ],
  
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  
  docs: {
    autodocs: 'tag',
  },
  
  staticDirs: ['../src/assets'],

  typescript: {
    check: false,
  },
};

export default config;