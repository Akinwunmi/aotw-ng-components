import { AotwIconRegistry } from '@aotw/components';
import icons from '@aotw/core/dist/icons/icons.json';
import type { Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';

import docJson from '../documentation.json';
setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: 'var(--aotw-color-grey-200)'
        },
        {
          name: 'primary',
          value: 'var(--aotw-color-primary-500)'
        },
        {
          name: 'dark',
          value: 'var(--aotw-color-grey-700)'
        }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

AotwIconRegistry.register(icons);

export default preview;
