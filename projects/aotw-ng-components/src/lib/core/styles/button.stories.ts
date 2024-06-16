import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import {
  Icon,
  FlagIconComponent,
  ICONS,
  IconService,
  MockIconService,
} from '../../components';

type StoryArgs = {
  disabled?: boolean;
  ghost?: boolean;
  icon?: string;
  raised?: boolean;
  rounded?: boolean;
  secondary?: boolean;
  text?: string;
};

const args: StoryArgs = {
  disabled: false,
  ghost: false,
  icon: 'chevron-left',
  raised: true,
  rounded: false,
  secondary: false,
  text: 'Button',
};

const meta: Meta<StoryArgs> = {
  tags: ['autodocs'],
  title: 'Components/Button',
  decorators: [
    moduleMetadata({
      imports: [FlagIconComponent],
      providers: [
        {
          provide: IconService,
          useClass: MockIconService,
        },
      ],
    }),
  ],
  render: (props) => ({
    props,
    template: `
      <button
        flagButton
        type="button"
        [attr.ghost]=${props.ghost || undefined}
        [attr.raised]=${props.raised || undefined}
        [attr.rounded]=${props.rounded || undefined}
        [attr.secondary]=${props.secondary || undefined}
        [disabled]=${props.disabled || undefined}
      >
        ${props.icon && `<flag-icon name=${props.icon} />`}
        ${props.text}
      </button>
    `,
  }),
  argTypes: {
    icon: {
      control: 'select',
      options: ['', ...ICONS.map((icon: Icon) => icon.name)],
    },
  },
};
export default meta;
type Story = StoryObj<StoryArgs>;

export const Primary: Story = {
  args,
};
