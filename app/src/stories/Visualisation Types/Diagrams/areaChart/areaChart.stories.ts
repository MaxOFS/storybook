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
    iframeUrl: "https://datavis-a.bfs.admin.ch/guidelines/assets/visualisationTypes/gr-areaChart/index.html",
  },
}

export const breaks: Story = {
    args: {
      iframeUrl: "https://datavis-a.bfs.admin.ch/guidelines/assets/visualisationTypes/gr-areaChart-breaks/index.html",
    },
  }
  
export const diverging: Story = {
    args: {
      iframeUrl: "https://datavis-a.bfs.admin.ch/guidelines/assets/visualisationTypes/gr-areaChart-diverging/index.html",
    },
  }
  