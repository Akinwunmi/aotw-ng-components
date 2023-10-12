import { CommonModule } from '@angular/common';
import '@aotw/components';
import {
  componentWrapperDecorator,
  moduleMetadata,
  Meta,
  StoryObj
} from '@storybook/angular';

import { AotwDynamicTextComponent } from './dynamic-text.component';

type DynamicTextArgs = AotwDynamicTextComponent & {
  text: string;
};

const args: DynamicTextArgs = {
  alignment: 'left',
  text: 'Dynamic Text'
};

const meta: Meta<DynamicTextArgs> = {
  title: 'Components/Dynamic Text',
  component: AotwDynamicTextComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [AotwDynamicTextComponent, CommonModule]
    }),
    componentWrapperDecorator(story => `
      <div style="display: grid; height: 2rem; width: 6rem">
        ${story}
      </div>
    `)
  ],
  render: ({ text, ...args }) => ({
    props: args,
    template: `
      <aotw-ng-dynamic-text>
        ${text}
      </aotw-ng-dynamic-text>
    `
  }),
  argTypes: {}
};

export default meta;
type Story = StoryObj<DynamicTextArgs>;

export const Default: Story = { args };
