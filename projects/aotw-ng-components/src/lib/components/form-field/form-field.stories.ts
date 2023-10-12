import { CommonModule } from '@angular/common';
import '@aotw/components';
import {
  moduleMetadata,
  Meta,
  StoryObj
} from '@storybook/angular';

import { AotwFormFieldComponent } from './form-field.component';

type FormFieldArgs = AotwFormFieldComponent & {
  inputType: 'checkbox' | 'radio' | 'text';
};

const args: FormFieldArgs = {
  inputType: 'text',
  label: 'Form Field'
};

const meta: Meta<FormFieldArgs> = {
  title: 'Components/Form Field',
  component: AotwFormFieldComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [AotwFormFieldComponent, CommonModule]
    })
  ],
  render: ({ inputType, ...args }) => ({
    props: args,
    template: `
      <aotw-ng-form-field [label]="label" [message]="message">
        @if (${inputType === 'text'}) {
          <input />
        }
        @if (${inputType === 'checkbox'}) {
          <input id="checkOne" aotw-checkbox type="checkbox" />
          <label for="checkOne">Option 1</label>
          <input id="checkTwo" aotw-checkbox type="checkbox" />
          <label for="checkTwo">Option 2</label>
        }
        @if (${inputType === 'radio'}) {
          <input id="radioOne" aotw-radio-button type="radio" name="radio-buttons" />
          <label for="radioOne">Option 1</label>
          <input id="radioTwo" aotw-radio-button type="radio" name="radio-buttons" />
          <label for="radioTwo">Option 2</label>
        }
      </aotw-ng-form-field>
    `
  }),
  argTypes: {
    inputType: {
      control: 'select',
      options: ['checkbox', 'radio', 'text']
    },
    label: {
      control: 'text'
    },
    message: {
      control: 'text'
    }
  }
};

export default meta;
type Story = StoryObj<FormFieldArgs>;

export const Default: Story = { args };

export const WithMessage: Story = {
  args: {
    ...args,
    message: 'Message'
  }
};

export const Checkboxes: Story = {
  args: {
    ...args,
    inputType: 'checkbox'
  }
};

export const RadioButtons: Story = {
  args: {
    ...args,
    inputType: 'radio'
  }
};
