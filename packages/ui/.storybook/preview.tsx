import type { Preview } from '@storybook/react';


import { UIProvider } from '../src';
import { ComponentPreview, PropCombinationsDecorator } from './decorator';

const customViewports = {
  ['360 x 740']: {
    name: '360 x 740',
    styles: {
      width: '360px',
      height: '740px',
    },
  },
};

const preview: Preview = {
  decorators: [
    PropCombinationsDecorator,
    ComponentPreview,
    (story) => (
      <UIProvider>
        <div style={{ display: 'flex', paddingTop: 10 }}>{story()}</div>
      </UIProvider>
    ),
  ],
  globals: {
    locale: 'en',
    locales: {
      en: 'English',
      ko: '한국어',
      ja: '日本語',
    },
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
    viewport: {
      viewports: {
        ...customViewports,
      },
    },
    chromatic: { viewports: [360] },
  },
};

export default preview;
