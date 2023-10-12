import { CommonModule } from '@angular/common';
import '@aotw/components';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';

import { AotwSkeletonComponent } from './skeleton.component';

type SkeletonArgs = AotwSkeletonComponent;

const args: SkeletonArgs = {
  loading: true,
  soft: false
};

const meta: Meta<SkeletonArgs> = {
  title: 'Components/Skeleton',
  component: AotwSkeletonComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [AotwSkeletonComponent, CommonModule]
    })
  ],
  render: args => ({
    props: args,
    template: `
      <aotw-ng-skeleton
        style="height: 8rem; width: 12rem"
        [loading]="loading"
        [soft]="soft"
      />
    `
  }),
  argTypes: {}
};

export default meta;
type Story = StoryObj<SkeletonArgs>;

export const Default: Story = { args };

export const Soft: Story = {
  args: { ...args, soft: true }
};

export const Static: Story = {
  args: { ...args, loading: false }
};
