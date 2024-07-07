import {
  Meta,
  StoryObj,
  componentWrapperDecorator,
  moduleMetadata,
} from '@storybook/angular';

import { FlagIconComponent, IconService, MockIconService } from '../icon';

import { AotwYearPickerComponent } from './year-picker.component';

type YearPickerArgs = Pick<
  AotwYearPickerComponent,
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
  component: AotwYearPickerComponent,
  tags: ['autodocs'],
  decorators: [
    componentWrapperDecorator((story) => `<div style="max-width: 20rem">${story}</div>`),
    moduleMetadata({
      imports: [AotwYearPickerComponent, FlagIconComponent],
      providers: [
        {
          provide: IconService,
          useValue: MockIconService,
        }
      ]
    })
  ],
  render: args => ({
    props: args,
  }),
  argTypes: {}
};

export default meta;
type Story = StoryObj<YearPickerArgs>;

export const Default: Story = { args };
