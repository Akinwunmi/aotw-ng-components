import {
  moduleMetadata,
  Meta,
  StoryObj
} from '@storybook/angular';

import { FlagFormFieldComponent } from './form-field.component';

type FormFieldArgs = FlagFormFieldComponent & {
  inputType: 'text';
  label: string;
};

const args: FormFieldArgs = {
  inputType: 'text',
  label: 'Form Field'
};

const meta: Meta<FormFieldArgs> = {
  title: 'Components/Form Field (beta)',
  component: FlagFormFieldComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [FlagFormFieldComponent]
    })
  ],
  render: ({ inputType, label, ...args }) => ({
    props: args,
    template: `
      <flag-form-field>
        ${label ? `<label flagLabel>${label}</label>` : ''}
        ${inputType === 'text' ? '<input flagInput />' : ''}
      </flag-form-field>
    `
  }),
  argTypes: {
    inputType: {
      control: 'select',
      options: ['text']
    },
    label: {
      control: 'text'
    },
  }
};

export default meta;
type Story = StoryObj<FormFieldArgs>;

export const Default: Story = { args };
