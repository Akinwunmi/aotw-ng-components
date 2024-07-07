import type { Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';

import docJson from '../documentation.json';

setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: 'var(--flag-color-grey-200)'
        },
        {
          name: 'primary',
          value: 'var(--flag-color-primary-500)'
        },
        {
          name: 'dark',
          value: 'var(--flag-color-grey-700)'
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

export default preview;
