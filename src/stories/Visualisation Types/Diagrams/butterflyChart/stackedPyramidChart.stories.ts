import type { Meta, StoryObj } from '@storybook/angular';

import { DynvisComponent } from '../../../../app/dynvis.component';

const meta: Meta<DynvisComponent> = {
    title: 'vizTypes/stackedPyramid',
    component: DynvisComponent,
    tags: ['!dev', '!autodocs'],
    args: {
    },
};

export default meta;
  type Story = StoryObj<DynvisComponent>;
  
export const Default: Story = {
    args: {
      vizId: "https://datavis.bfs.admin.ch/guidelines/visualisationTypes/diagrams/butterfly/gr-stackedPyramid/gr-f-01.05.03.01.03-su.html",
      lang: 'e'
    },
}