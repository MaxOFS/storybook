import type { Meta, StoryObj } from '@storybook/angular';

import { DWComponent } from '../../../app/dw.component';

const meta: Meta<DWComponent> = {
    title: 'VisualisationTypes/arrowChart',
    component: DWComponent,
    tags: ['!dev', '!autodocs'],
    args: {
    },
  };

export default meta;
type Story = StoryObj<DWComponent>;

export const Description: Story = {
  args: {
    iframeUrl: "https://datavis.bfs.admin.ch/guidelines/visualisationTypes/diagrams/arrow/gr-arrowChart/index.html",
  },
}

export const groups: Story = {
    args: {
      iframeUrl: "https://datavis.bfs.admin.ch/guidelines/visualisationTypes/diagrams/arrow/gr-arrowChart-groups/index.html",
    },
  }

  