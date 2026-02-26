import type { Meta, StoryObj } from '@storybook/angular';

import { DWComponent } from '../../../../app/dw.component';

const meta: Meta<DWComponent> = {
    title: 'VisualisationTypes/groupedBarChart',
    component: DWComponent,
    tags: ['!dev', '!autodocs'],
    args: {
    },
  };

export default meta;
type Story = StoryObj<DWComponent>;

export const Description: Story = {
  args: {
    iframeUrl: "https://datavis-a.bfs.admin.ch/guidelines/assets/visualisationTypes/gr-groupedBar/index.html",
  },
}

export const overlay: Story = {
    args: {
      iframeUrl: "https://datavis-a.bfs.admin.ch/guidelines/assets/visualisationTypes/gr-groupedBar-overlay/index.html",
    },
  }


export const groups: Story = {
    args: {
      iframeUrl: "https://datavis-a.bfs.admin.ch/guidelines/assets/visualisationTypes/gr-groupedBar-groups/index.html",
    },
  }


export const confidence: Story = {
    args: {
      iframeUrl: "https://datavis-a.bfs.admin.ch/guidelines/assets/visualisationTypes/gr-groupedBar-confidence/index.html",
    },
  }