import type { Meta, StoryObj } from '@storybook/angular';

import { DWComponent } from '../../../../app/dw.component';

const meta: Meta<DWComponent> = {
    title: 'VisualisationTypes/stackedColumnchart',
    component: DWComponent,
    tags: ['!dev', '!autodocs'],
    args: {
    },
  };

export default meta;
type Story = StoryObj<DWComponent>;

export const description: Story = {
  args: {
    iframeUrl: "https://datavis-a.bfs.admin.ch/guidelines/assets/visualisationTypes/gr-stackedColumn/index.html",
  },
}

export const relative: Story = {
    args: {
      iframeUrl: "https://datavis-a.bfs.admin.ch/guidelines/assets/visualisationTypes/gr-stackedColumn-relative/index.html",
    },
}