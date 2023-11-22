import { CommonModule } from '@angular/common';
import '@aotw/components';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';

import { Chip } from '../chip/chip.model';

import { AotwChipGroupComponent } from './chip-group.component';

type ChipGroupArgs = Pick<AotwChipGroupComponent, 'chips' | 'size'>;

const args: ChipGroupArgs = {
  chips: [
    { id: '1', active: false, disabled: false, label: 'Chip 1' },
    { id: '2', active: false, disabled: false, label: 'Chip 2' }
  ],
  size: 'small'
};

const meta: Meta<ChipGroupArgs> = {
  title: 'Components/Chip Group',
  component: AotwChipGroupComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [AotwChipGroupComponent, CommonModule]
    })
  ],
  render: args => ({
    props: args
  }),
  argTypes: {}
};

export default meta;
type Story = StoryObj<ChipGroupArgs>;

export const Default: Story = { args };

export const MediumIcons: Story = {
  args: {
    ...args,
    chips: [
      { id: '1', active: false, disabled: false, label: '', icon: 'list' },
      { id: '2', active: true, disabled: false, label: '', icon: 'grid' }
    ] as Chip[],
    size: 'medium'
  }
};
