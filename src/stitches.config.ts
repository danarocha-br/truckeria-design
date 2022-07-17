const { createStitches } = require('@stitches/react');
import type * as Stitches from '@stitches/react';
export const { VariantProps } = require('@stitches/react');

import { colors, font, spacing, radii } from './styles/tokens';
import { dark, light } from './styles/themes';

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
} = createStitches({
  theme: {
    colors: {
      transparent: 'transparent',
      brand: colors.brand,
      white: colors.white,
      ...colors.green,
      ...colors.blue,
      ...colors.yellow,
      ...colors.red,
      ...colors.neutral,

      shadowLight: 'hsl(206 22% 7% / 35%)',
      shadowDark: 'hsl(206 22% 7% / 20%)',

      // Dark theme
      ...dark,
    },
    fonts: {
      sans: font.family.sans,
    },
    fontWeights: {
      ...font.weight,
    },
    space: {
      ...spacing,
    },
    sizes: {
      ...spacing,
    },

    fontSizes: {
      ...font.size,
    },
    radii: {
      ...radii,
    },
    zIndices: {
      1: '1',
      2: '2',
      3: '3',
      100: '100',
      max: '999',
    },
    borderWidths: {
      1: '1px',
      2: '2px',
      4: '4px',
    },
    shadows: {
      10: '0px 4px 10px rgba(0, 0, 0, 0.05)',
      30: ' 0px 4px 30px rgba(0, 0, 0, 0.08)',
    },
  },
  media: {
    'bp-sm': '(min-width: 520px)',
    'bp-md': '(min-width: 900px)',
    'bp-lg': '(min-width: 1200px)',
    'bp-xl': '(min-width: 1800px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    d: (value: Stitches.PropertyValue<'display'>) => ({
      display: value,
    }),
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    spaceY: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: `calc(${value} * calc(1 - 0))`,
      marginBottom: `calc(${value} * 0)`,
    }),

    ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

    fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
      flexDirection: value,
    }),
    fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

    ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
      alignItems: value,
    }),
    ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
      alignContent: value,
    }),
    jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
      justifyContent: value,
    }),
    as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
    fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({
      flexShrink: value,
    }),
    fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

    bg: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),

    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),

    lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
      lineHeight: value,
    }),

    ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),

    pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
      pointerEvents: value,
    }),
    us: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),

    w: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
    }),

    h: (value: Stitches.PropertyValue<'height'>) => ({
      height: value,
    }),

    appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;

export const lightTheme = createTheme('light-theme', {
  colors: {
    // Light theme
    ...light,
  },
});

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },

  html: {
    scrollBehavior: 'smooth',
  },

  body: {
    margin: 0,
    color: '$text-default',
    backgroundColor: '$surface-base-default',
  },

  button: {
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
  },

  'body, button': {
    color: '$forest',
    fontFamily: '$sans',
    fontSize: '$base',
  },

  '[disabled]': {
    cursor: 'not-allowed',
  },

  'html, body, #root, #__next, #__next > div': {
    height: '100%',
    zIndex: 0,

    '@bp-md': {
      height: 'auto',
    },
  },

  '#__next': {
    position: 'relative',
    zIndex: 0,
  },

  'button, input, textarea': {
    fontFamily: '$sans',
    fontDisplay: 'swap',
  },

  svg: { display: 'block' },

  'pre, code': { margin: 0, fontFamily: '$mono' },

  '::selection': {
    backgroundColor: '$900',
  },

  'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus,textarea:-webkit-autofill,textarea:-webkit-autofill:hover,textarea:-webkit-autofill:focus,select:-webkit-autofill,select:-webkit-autofill:hover,select:-webkit-autofill:focus': {
    boxShadow: '0 0 0px 4px hsla(21, 100%, 91%, 1) inset !important',
    transition: 'background-color 5000s ease-in-out 0s',
    filter: 'none',
  },
});