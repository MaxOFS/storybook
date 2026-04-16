import type { Meta, StoryObj } from '@storybook/angular';

import { DynvisComponent } from '../../../app/dynvis.component';

const meta: Meta<DynvisComponent> = {
    title: 'Corporate/UI-Elements/export',
    component: DynvisComponent,
    tags: ['!dev', '!autodocs'],
    args: {
    },
};

export default meta;
  type Story = StoryObj<DynvisComponent>;
  
export const simple: Story = {
    args: {
      vizId: "https://datavis.bfs.admin.ch/guidelines/editoral/uiElements/gr-export/VIZTYP-e-VIZID.html",
      lang: 'e'
    },
}