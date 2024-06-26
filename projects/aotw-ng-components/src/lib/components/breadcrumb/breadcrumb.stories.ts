import { CommonModule } from '@angular/common';
import '@aotw/components';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';

import { AotwBreadcrumbComponent } from './breadcrumb.component';

type BreadcrumbArgs = Pick<AotwBreadcrumbComponent, 'items'>;

const args: BreadcrumbArgs = {
  items: [
    { title: 'Home', link: '/' },
    { title: 'Category', link: '/category' }
  ]
};

const meta: Meta<BreadcrumbArgs> = {
  title: 'Components/Breadcrumb',
  component: AotwBreadcrumbComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [AotwBreadcrumbComponent, CommonModule]
    })
  ],
  render: args => ({
    props: args
  }),
  argTypes: {}
};

export default meta;
type Story = StoryObj<BreadcrumbArgs>;

export const Default: Story = { args };
