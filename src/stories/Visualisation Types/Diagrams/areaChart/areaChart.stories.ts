import type { Meta, StoryObj } from '@storybook/angular';

import { DWComponent } from '../../../../app/dw.component';

const meta: Meta<DWComponent> = {
    title: 'VisualisationTypes/areaChart',
    component: DWComponent,
    tags: ['!dev', '!autodocs'],
    args: {
    },
  };

export default meta;
type Story = StoryObj<DWComponent>;

export const Description: Story = {
  args: {
    iframeUrl: "https://datavis.bfs.admin.ch/guidelines/visualisationTypes/diagrams/area/gr-areaChart/index.html",
  },
}

export const breaks: Story = {
    args: {
      iframeUrl: "https://datavis.bfs.admin.ch/guidelines/visualisationTypes/diagrams/area/gr-areaChart-breaks/index.html",
    },
  }
  
export const diverging: Story = {
    args: {
      iframeUrl: "https://datavis.bfs.admin.ch/guidelines/visualisationTypes/diagrams/area/gr-areaChart-diverging/index.html",
    },
  }
  