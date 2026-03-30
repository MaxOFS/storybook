import { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from '../../app/badge.component';

const meta: Meta<BadgeComponent> = {
  title: 'Components/Badge',
  component: BadgeComponent,
  tags: ['!dev', '!autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    compact: {
      control: 'boolean',
      description: 'Compact padding variant',
    },
    status: {
      control: 'select',
      options: ['stable', 'unstable', 'experimental', 'under construction'],
      description: 'Badge status type',
    },
  },
};

export default meta;
type Story = StoryObj<BadgeComponent>;

export const Default: Story = {
  args: {
    compact: false,
    status: 'neutral',
  },
  render: (args) => ({
    props: args,
    template: `<app-badge [compact]="compact" [status]="status">Default</app-badge>`,
  }),
};

export const stable: Story = {
  args: {
    status: 'stable',
  },
  render: (args) => ({
    props: args,
    template: `<app-badge [status]="status">Stable</app-badge>`,
  }),
};

export const unstable: Story = {
  args: {
    status: 'unstable',
  },
  render: (args) => ({
    props: args,
    template: `<app-badge [status]="status">Unstable</app-badge>`,
  }),
};

export const experimental: Story = {
  args: {
    status: 'experimental',
  },
  render: (args) => ({
    props: args,
    template: `<app-badge [status]="status">Experimental</app-badge>`,
  }),
};

export const underConstruction: Story = {
  args: {
    status: 'underConstruction',
  },
  render: (args) => ({
    props: args,
    template: `<app-badge [status]="status">Under construction</app-badge>`,
  }),
};