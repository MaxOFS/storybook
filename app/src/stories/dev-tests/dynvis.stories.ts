import type { Meta, StoryObj } from '@storybook/angular';

import { DynvisComponent } from '../../app/dynvis.component';

const meta: Meta<DynvisComponent> = {
    title: 'dev-tests/DynvisChart',
    component: DynvisComponent,
    tags: ['!dev', '!autodocs'],
    args: {
    },
};

export default meta;
  type Story = StoryObj<DynvisComponent>;
  
export const Default: Story = {
    args: {
      vizId: "https://datavis.bfs.admin.ch/assets/10/gd-10.03.01.13/gd-d-10.03.01.13.html",
      lang: 'd'
    },
}