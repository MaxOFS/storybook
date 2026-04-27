import type { Meta, StoryObj } from '@storybook/angular';

import { DWComponent } from '../../../app/dw.component';

const meta: Meta<DWComponent> = {
    title: 'VisualisationTypes/tableVisualisation',
    component: DWComponent,
    tags: ['!dev', '!autodocs'],
    args: {
    },
  };

export default meta;
type Story = StoryObj<DWComponent>;

export const bar: Story = {
  args: {
    iframeUrl: "https://datavis.bfs.admin.ch/guidelines/visualisationTypes/tables/withvisualisation/gr-tableViz-bar/index.html",
  },
}

export const column: Story = {
    args: {
      iframeUrl: "https://datavis.bfs.admin.ch/guidelines/visualisationTypes/tables/withvisualisation/gr-tableViz-column/index.html",
    },
  }

export const icon: Story = {
    args: {
      iframeUrl: "https://datavis.bfs.admin.ch/guidelines/visualisationTypes/tables/withvisualisation/gr-tableViz-icon/index.html",
    },
  }

export const sparkline: Story = {
    args: {
      iframeUrl: "https://datavis.bfs.admin.ch/guidelines/visualisationTypes/tables/withvisualisation/gr-tableViz-sparkline/index.html",
    },
  }