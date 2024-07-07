import {
  Meta,
  StoryObj,
  componentWrapperDecorator,
  moduleMetadata,
} from '@storybook/angular';

import { FlagIconComponent } from '../icon';

import { FlagYearPickerComponent } from './year-picker.component';

type YearPickerArgs = Pick<
  FlagYearPickerComponent,
  'min' | 'max' | 'rangeSize' | 'selected'
>;

const args: YearPickerArgs = {
  min: 1800,
  max: 2024,
  rangeSize: 9,
  selected: 2024,
};

const meta: Meta<YearPickerArgs> = {
  title: 'Components/Year Picker (beta)',
  component: FlagYearPickerComponent,
  tags: ['autodocs'],
  decorators: [
    componentWrapperDecorator((story) => `<div style="max-width: 20rem">${story}</div>`),
    moduleMetadata({
      imports: [FlagIconComponent, FlagYearPickerComponent],
    })
  ],
  render: args => ({
    props: args,
  }),
};

export default meta;
type Story = StoryObj<YearPickerArgs>;

export const Default: Story = { args };
