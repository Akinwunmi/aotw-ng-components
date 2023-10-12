import { CommonModule } from '@angular/common';
import '@aotw/components';
import icons from '@aotw/core/dist/icons/icons.json';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';

import { AotwIconComponent } from '../icon';

import { AotwChipComponent } from './chip.component';

type ChipArgs = AotwChipComponent & {
  icon: string;
  label: string;
};

const args: ChipArgs = {
  active: false,
  disabled: false,
  icon: 'check',
  label: 'Chip',
  size: 'small',
  onMouseDown: () => {}
};

const meta: Meta<ChipArgs> = {
  title: 'Components/Chip',
  component: AotwChipComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [AotwChipComponent, AotwIconComponent, CommonModule]
    })
  ],
  render: ({ icon, label, ...args }) => ({
    props: args,
    template: `
      <aotw-lib-chip [active]="active" [disabled]="disabled" [size]="size">
        <aotw-lib-icon
          *ngIf="${icon.length}"
          name="${icon}"
          [size]="size"
        ></aotw-lib-icon>
        ${label}
      </aotw-lib-chip>
    `
  }),
  argTypes: {
    icon: {
      control: 'select',
      options: icons.map(icon => icon.name)
    },
    label: {
      control: 'text'
    }
  }
};

export default meta;
type Story = StoryObj<ChipArgs>;

export const Default: Story = { args };

export const Active: Story = {
  args: {
    ...args,
    active: true
  }
};

export const MediumSize: Story = {
  args: {
    ...args,
    icon: 'logo',
    label: '',
    size: 'medium'
  }
};

export const Disabled: Story = {
  args: {
    ...args,
    disabled: true
  }
};
