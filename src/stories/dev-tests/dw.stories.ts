import type { Meta, StoryObj } from '@storybook/angular';

import { DWComponent } from '../../app/dw.component';

const meta: Meta<DWComponent> = {
    title: 'dev-tests/DWChart',
    component: DWComponent,
    tags: ['autodocs'],
    args: {
    },
  };

export default meta;
type Story = StoryObj<DWComponent>;

export const Default: Story = {
  args: {
    iframeUrl: "https://datawrapper.dwcdn.net/82367b203d68080987d8a3de7e57df3e/12/",
  },
}

export const ZIP: Story = {
  args: {
    iframeUrl: "https://datavis-a.bfs.admin.ch/guidelines/assets/visualisationTypes/gr-areaChart/index.html"
  }
}