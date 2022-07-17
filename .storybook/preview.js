import { useState } from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { themes } from '@storybook/theming';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import 'styles/reset.css';
import { lightTheme } from "../src/stitches.config";

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
  },
  options: {
    storySort: {
      order: ['Intro', 'Foundation', 'Primitives', 'Components', 'Navigation', 'Form Controls', 'Templates'],
    },
  },

  backgrounds: {
    default: 'dark',
    layout: 'fullscreen',
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
};


const withThemeProvider=(Story,context)=>{
  const [isLightTheme, setLightTheme] = useState(false);

  const handleTheme = () => {
    setLightTheme(!isLightTheme)

  }

  return (
    <div className={ isLightTheme ? lightTheme : undefined} css={{ width: '100%', height: '100%'}}>
      {/* <Button size='sm' variant='icon' color='transparent' icon={isLightTheme ? <HiMoon /> : <HiSun /> } onClick={handleTheme} css={{
        position: 'absolute',
        right: 0
      }} /> */}
      <Story {...context} />
    </div>
  )
}

export const decorators = [withThemeProvider];