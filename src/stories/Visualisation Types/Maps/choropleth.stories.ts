import type { Meta, StoryObj } from '@storybook/angular';

import { DWComponent } from '../../../app/dw.component';

const meta: Meta<DWComponent> = {
    title: 'VisualisationTypes/choropleth',
    component: DWComponent,
    tags: ['!dev', '!autodocs'],
    args: {
    },
  };

export default meta;
type Story = StoryObj<DWComponent>;

export const Description: Story = {
  args: {
    iframeUrl: "https://datavis.bfs.admin.ch/guidelines/visualisationTypes/maps/choropleth/index.html",
  },
}

export const Confidence: Story = {
  args: {
    iframeUrl: "https://datavis.bfs.admin.ch/guidelines/visualisationTypes/diagrams/bar/gr-barChart-confidence/index.html",
  }
}