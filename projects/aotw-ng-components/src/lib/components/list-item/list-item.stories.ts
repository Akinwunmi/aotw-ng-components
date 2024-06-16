import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';

import { FlagIconComponent, IconService, MockIconService, ICONS } from '../icon';

import { FlagListItemComponent } from './list-item.component';

type ListItemArgs = {
  active?: boolean;
  disabled?: boolean;
  interactive?: boolean;
  label: string;
  prefix: string;
  suffix: string;
};

const args: ListItemArgs = {
  active: false,
  disabled: false,
  interactive: true,
  label: 'List Item',
  prefix: '',
  suffix: ''
};

const meta: Meta<ListItemArgs> = {
  title: 'Components/List Item',
  component: FlagListItemComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [FlagIconComponent, FlagListItemComponent],
      providers: [
        {
          provide: IconService,
          useClass: MockIconService,
        },
      ],
    })
  ],
  render: ({label, prefix, suffix, ...args}) => ({
    props: args,
    template: `
      <flag-list-item [active]="active" [disabled]="disabled" [interactive]="interactive">
        ${prefix ? `<flag-icon name="${prefix}" />` : ''}
        ${label}
        ${suffix ? `<flag-icon name="${suffix}" />` : ''}
      </flag-list-item>
    `
  }),
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Chip'
    },
    prefix: {
      control: 'select',
      options: ICONS.map(icon => icon.name)
    },
    suffix: {
      control: 'select',
      options: ICONS.map(icon => icon.name)
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
    suffix: 'arrow-right'
  }
};

export const NotInteractive: Story = {
  args: {
    ...args,
    interactive: false
  }
};

export const Disabled: Story = {
  args: {
    ...args,
    disabled: true
  }
};
