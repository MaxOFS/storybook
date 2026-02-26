import type { Meta, StoryObj } from '@storybook/angular';

import { DynvisComponent } from '../../../app/dynvis.component';

const meta: Meta<DynvisComponent> = {
    title: 'Visualisation Types/Diagrams/Marimekko',
    component: DynvisComponent,
    tags: ['!dev', '!autodocs'],
    args: {
    },
};

export default meta;
  type Story = StoryObj<DynvisComponent>;
  
export const Default: Story = {
    args: {
      vizId: "https://datavis-a.bfs.admin.ch/guidelines/assets/visualisationTypes/gr-marimekko/gr-d-01.07.07.03.html",
      lang: 'd'
    },
}