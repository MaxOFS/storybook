import type { Meta, StoryObj } from '@storybook/angular';

import { DWComponent } from '../../../app/dw.component';

const meta: Meta<DWComponent> = {
    title: 'VisualisationTypes/lollipop',
    component: DWComponent,
    tags: ['!dev', '!autodocs'],
    args: {
    },
  };

export default meta;
type Story = StoryObj<DWComponent>;

export const description: Story = {
  args: {
    iframeUrl: "https://datavis.bfs.admin.ch/guidelines/visualisationTypes/diagrams/lollipop/gr-lollipop/index.html",
  },
}

export const groups: Story = {
    args: {
      iframeUrl: "https://datavis.bfs.admin.ch/guidelines/visualisationTypes/diagrams/lollipop/gr-lollipop-groups/index.html",
    },
  }