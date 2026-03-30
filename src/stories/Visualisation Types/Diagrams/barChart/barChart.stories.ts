import type { Meta, StoryObj } from '@storybook/angular';

import { DWComponent } from '../../../../app/dw.component';

const meta: Meta<DWComponent> = {
    title: 'VisualisationTypes/barChart',
    component: DWComponent,
    tags: ['!dev', '!autodocs'],
    args: {
    },
  };

export default meta;
type Story = StoryObj<DWComponent>;

export const Description: Story = {
  args: {
    iframeUrl: "https://datavis.bfs.admin.ch/guidelines/visualisationTypes/diagrams/bar/gr-barChart/index.html",
  },
}

export const Confidence: Story = {
  args: {
    iframeUrl: "https://datavis.bfs.admin.ch/guidelines/visualisationTypes/diagrams/bar/gr-barChart-confidence/index.html",
  }
}

export const Overlay: Story = {
  args: {
    iframeUrl: "https://datavis.bfs.admin.ch/guidelines/visualisationTypes/diagrams/bar/gr-barChart-overlay/index.html",
  }
}

export const Groups: Story = {
  args: {
    iframeUrl: "https://datavis.bfs.admin.ch/guidelines/visualisationTypes/diagrams/bar/gr-barChart-groups/index.html",
  }
}

export const divergent: Story = {
  args: {
    iframeUrl: "https://datavis.bfs.admin.ch/guidelines/visualisationTypes/diagrams/bar/gr-barChart-diverging/index.html",
  }
}