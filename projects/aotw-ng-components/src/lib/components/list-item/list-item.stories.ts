import { CommonModule } from '@angular/common';
import '@aotw/components';
import icons from '@aotw/core/dist/icons/icons.json';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';

import { AotwIconComponent } from '../icon';

import { AotwListItemComponent } from './list-item.component';

type ListItemArgs = AotwListItemComponent & {
  label: string;
  prefix: string;
  suffix: string;
};

const args: ListItemArgs = {
  active: false,
  disabled: false,
  label: 'List Item',
  prefix: '',
  suffix: ''
};

const meta: Meta<ListItemArgs> = {
  title: 'Components/List Item',
  component: AotwListItemComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [AotwIconComponent, AotwListItemComponent, CommonModule]
    })
  ],
  render: ({label, prefix, suffix, ...args}) => ({
    props: args,
    template: `
      <aotw-ng-list-item [active]="active" [disabled]="disabled">
        @if (${prefix.length}) {
          <aotw-ng-icon name="${prefix}" prefix />
        }
        ${label}
        @if (${suffix.length}) {
          <aotw-ng-icon name="${suffix}" suffix />
        }
      </aotw-ng-list-item>
    `
  }),
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Chip'
    },
    prefix: {
      control: 'select',
      options: icons.map(icon => icon.name)
    },
    suffix: {
      control: 'select',
      options: icons.map(icon => icon.name)
    }
  }
};

export default meta;
type Story = StoryObj<ListItemArgs>;

export const Default: Story = { args };

export const Active: Story = {
  args: {
    ...args,
    active: true
  }
};

export const WithAffixes: Story = {
  args: {
    ...args,
    prefix: 'check',
    suffix: 'ellipsis'
  }
};

export const Disabled: Story = {
  args: {
    ...args,
    disabled: true
  }
};
