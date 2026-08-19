import type { Meta, StoryObj } from '@storybook/angular';

import { DWComponent } from '../../../app/dw.component';

const meta: Meta<DWComponent> = {
    title: 'VisualisationTypes/generalPrinciples',
    component: DWComponent,
    tags: ['!dev', '!autodocs'],
    args: {
    },
  };

export default meta;
type Story = StoryObj<DWComponent>;

export const wide: Story = {
  args: {
    iframeUrl: "https://datavis.bfs.admin.ch/guidelines/visualisationTypes/tables/generalPrinciples/wideTable/index.html",
  },
}

export const tidy: Story = {
    args: {
      iframeUrl: "https://datavis.bfs.admin.ch/guidelines/visualisationTypes/tables/generalPrinciples/tidyTable/index.html",
    },
  }
