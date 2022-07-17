import { useState } from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { themes } from '@storybook/theming';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { TabContainer } from 'storybook-addon-docs-tabs';

import 'styles/reset.css';
import { lightTheme, darkTheme } from '../src/stitches.config';

addDecorator(withDesign());

addParameters({
  a11y: {},
});

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  docs: {
    theme: themes.dark,
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        <TabContainer context={context}>{children}</TabContainer>
      </DocsContainer>
    ),
  },
  options: {
    storySort: {
      order: [
        'Intro',
        'Foundation',
        'Primitives',
        'Components',
        'Navigation',
        'Form Controls',
        'Templates',
      ],
    },
  },

  backgrounds: {
    default: 'dark',
    layout: 'centered',
    values: [
      {
        name: 'light',
        value: '#fff',
      },
      {
        name: 'dark',
        value: '#20242A',
      },
    ],
  },

  multipleThemesStitches: {
    values: [
      {
        name: 'Light',
        theme: lightTheme,
      },
      {
        name: 'Dark',
        theme: darkTheme,
      },
    ],
  },
};


