import type { Meta, StoryObj } from '@storybook/angular';

import { DynvisComponent } from '../../../../app/dynvis.component';

const meta: Meta<DynvisComponent> = {
    title: 'Visualisation Types/Diagrams/Pyramid',
    component: DynvisComponent,
    tags: ['!dev', '!autodocs'],
    args: {
    },
};

export default meta;
  type Story = StoryObj<DynvisComponent>;
  
export const description: Story = {
    args: {
      vizId: "https://datavis.bfs.admin.ch/guidelines/visualisationTypes/diagrams/butterfly/gr-pyramid/VIZTYP-d-VIZID.html",
      lang: 'd'
    },
}