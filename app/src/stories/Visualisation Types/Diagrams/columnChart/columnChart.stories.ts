import type { Meta, StoryObj } from '@storybook/angular';

import { DWComponent } from '../../../../app/dw.component';

const meta: Meta<DWComponent> = {
    title: 'VisualisationTypes/columnChart',
    component: DWComponent,
    tags: ['!dev', '!autodocs'],
    args: {
    },
  };

export default meta;
type Story = StoryObj<DWComponent>;

export const description: Story = {
  args: {
    iframeUrl: "https://datavis-a.bfs.admin.ch/guidelines/assets/visualisationTypes/gr-column/index.html",
  },
}

export const confidence: Story = {
    args: {
      iframeUrl: "https://datavis-a.bfs.admin.ch/guidelines/assets/visualisationTypes/gr-column-confidence/index.html",
    },
}

export const overlay: Story = {
    args: {
      iframeUrl: "https://datavis-a.bfs.admin.ch/guidelines/assets/visualisationTypes/gr-column-overlay/index.html",
    },
}

export const multiple: Story = {
    args: {
      iframeUrl: "https://datavis-a.bfs.admin.ch/guidelines/assets/visualisationTypes/gr-column-multiple/index.html",
    },
}

export const groups: Story = {
    args: {
      iframeUrl: "https://datavis-a.bfs.admin.ch/guidelines/assets/visualisationTypes/gr-column-groups/index.html",
    },
}