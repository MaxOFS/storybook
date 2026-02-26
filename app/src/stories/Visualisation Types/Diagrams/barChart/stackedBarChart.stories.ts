import type { Meta, StoryObj } from '@storybook/angular';

import { DWComponent } from '../../../../app/dw.component';

const meta: Meta<DWComponent> = {
    title: 'VisualisationTypes/stackedBarChart',
    component: DWComponent,
    tags: ['!dev', '!autodocs'],
    args: {
    },
  };

export default meta;
type Story = StoryObj<DWComponent>;

export const Description1: Story = {
  args: {
    iframeUrl: "https://datavis-a.bfs.admin.ch/guidelines/assets/visualisationTypes/gr-stackedBar/index.html",
  },
}

export const Description2: Story = {
    args: {
      iframeUrl: "https://datavis-a.bfs.admin.ch/guidelines/assets/visualisationTypes/gr-stackedBar2/index.html",
    },
  }

export const groups: Story = {
    args: {
      iframeUrl: "https://datavis-a.bfs.admin.ch/guidelines/assets/visualisationTypes/gr-stackedBar-groups/index.html",
    },
  }