import type { Meta, StoryObj } from '@storybook/angular';

import { DynvisComponent } from '../../../app/dynvis.component';

const meta: Meta<DynvisComponent> = {
    title: 'Visualisation Types/Diagrams/Treemap',
    component: DynvisComponent,
    tags: ['!dev', '!autodocs'],
    args: {
    },
};

export default meta;
  type Story = StoryObj<DynvisComponent>;
  
export const Default: Story = {
    args: {
      vizId: "https://datavis.bfs.admin.ch/guidelines/visualisationTypes/diagrams/treemap/gr-treemap/VIZTYP-e-VIZID.html",
      lang: 'e'
    },
}