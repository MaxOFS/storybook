import type { Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { moduleMetadata } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';
import docJson from '../documentation.json';

setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort:{
        order: ['Introduction', 'Changelog', 'Readability',['Introduction'], 'Corporate', ['Introduction'], 'Accessibility',['Introduction'], 'Cross-Media',['Introduction'], 'Visualisation Types',['Introduction']]
      }
    },
  },
};

export const parameters = {
  docs: {
    inlineStories: false, // Si les widgets ont des conflits
  },
};


export default preview;