import type { Meta, StoryObj } from '@storybook/angular';

import { DWComponent } from '../../../app/dw.component';

const meta: Meta<DWComponent> = {
    title: 'VisualisationTypes/dotplot',
    component: DWComponent,
    tags: ['!dev', '!autodocs'],
    args: {
    },
  };

export default meta;
type Story = StoryObj<DWComponent>;

export const description: Story = {
  args: {
    iframeUrl: "https://datavis-a.bfs.admin.ch/guidelines/assets/visualisationTypes/gr-dotplot/index.html",
  },
}

export const groups: Story = {
    args: {
      iframeUrl: "https://datavis-a.bfs.admin.ch/guidelines/assets/visualisationTypes/gr-dotplot-groups/index.html",
    },
}