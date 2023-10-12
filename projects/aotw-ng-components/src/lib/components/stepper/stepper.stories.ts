import { CommonModule } from '@angular/common';
import '@aotw/components';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';

import { AotwStepperComponent } from './stepper.component';

type StepperArgs = Pick<AotwStepperComponent, 'activeStep' | 'steps'>;

const args: StepperArgs = {
  activeStep: 0,
  steps: [
    { disabled: false, label: 'Step 1' },
    { disabled: false, label: 'Step 2' },
    { disabled: true, label: 'Step 3' },
  ]
};

const meta: Meta<StepperArgs> = {
  title: 'Components/Stepper',
  component: AotwStepperComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [AotwStepperComponent, CommonModule]
    })
  ],
  render: args => ({
    props: args
  }),
  argTypes: {}
};

export default meta;
type Story = StoryObj<StepperArgs>;

export const Default: Story = { args };
