import type { Meta, StoryObj } from '@storybook/angular';

import { DynvisComponent } from '../../../app/dynvis.component';

const meta: Meta<DynvisComponent> = {
    title: 'Corporate/UI-Elements/Slider',
    component: DynvisComponent,
    tags: ['!dev', '!autodocs'],
    args: {
    },
};

export default meta;
  type Story = StoryObj<DynvisComponent>;
  
export const simple: Story = {
    args: {
      vizId: "https://datavis.bfs.admin.ch/guidelines/editoral/uiElements/gr-continuousSlider/VIZTYP-e-VIZID.html",
      lang: 'e'
    },
}

export const range: Story = {
  args: {
    vizId: "https://datavis.bfs.admin.ch/guidelines/editoral/uiElements/gr-rangeSlider/VIZTYP-e-VIZID.html",
    lang: 'e'
  },
}

export const block: Story = {
  args: {
    vizId: "https://datavis.bfs.admin.ch/guidelines/editoral/uiElements/gr-blockSlider/VIZTYP-e-VIZID.html",
    lang: 'e'
  },
}