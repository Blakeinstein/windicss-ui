const plugin = require('windicss/plugin')
const defaultTheme = require('windicss/defaultTheme')
const hexRgb = require('hex-rgb-fixed')
const customFormsPlugin = require('windicss/plugin/forms')
const typographyPlugin = require('windicss/plugin/typography')

function rgba(hex, alpha) {
  const { red, green, blue } = hexRgb(hex)
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}

const colors = {
  current: 'currentColor',
  transparent: 'transparent',
  white: '#ffffff',
  black: '#000000',
  gray: {
    '50': '#f9fafb',
    '100': '#f4f5f7',
    '200': '#e5e7eb',
    '300': '#d2d6dc',
    '400': '#9fa6b2',
    '500': '#6b7280',
    '600': '#4b5563',
    '700': '#374151',
    '800': '#252f3f',
    '900': '#161e2e',
  },
  red: {
    '50': '#fdf2f2',
    '100': '#fde8e8',
    '200': '#fbd5d5',
    '300': '#f8b4b4',
    '400': '#f98080',
    '500': '#f05252',
    '600': '#e02424',
    '700': '#c81e1e',
    '800': '#9b1c1c',
    '900': '#771d1d',
  },
  orange: {
    '50': '#fff8f1',
    '100': '#feecdc',
    '200': '#fcd9bd',
    '300': '#fdba8c',
    '400': '#ff8a4c',
    '500': '#ff5a1f',
    '600': '#d03801',
    '700': '#b43403',
    '800': '#8a2c0d',
    '900': '#73230d',
  },
  yellow: {
    '50': '#fdfdea',
    '100': '#fdf6b2',
    '200': '#fce96a',
    '300': '#faca15',
    '400': '#e3a008',
    '500': '#c27803',
    '600': '#9f580a',
    '700': '#8e4b10',
    '800': '#723b13',
    '900': '#633112',
  },
  green: {
    '50': '#f3faf7',
    '100': '#def7ec',
    '200': '#bcf0da',
    '300': '#84e1bc',
    '400': '#31c48d',
    '500': '#0e9f6e',
    '600': '#057a55',
    '700': '#046c4e',
    '800': '#03543f',
    '900': '#014737',
  },
  teal: {
    '50': '#edfafa',
    '100': '#d5f5f6',
    '200': '#afecef',
    '300': '#7edce2',
    '400': '#16bdca',
    '500': '#0694a2',
    '600': '#047481',
    '700': '#036672',
    '800': '#05505c',
    '900': '#014451',
  },
  blue: {
    '50': '#ebf5ff',
    '100': '#e1effe',
    '200': '#c3ddfd',
    '300': '#a4cafe',
    '400': '#76a9fa',
    '500': '#3f83f8',
    '600': '#1c64f2',
    '700': '#1a56db',
    '800': '#1e429f',
    '900': '#233876',
  },
  indigo: {
    '50': '#f0f5ff',
    '100': '#e5edff',
    '200': '#cddbfe',
    '300': '#b4c6fc',
    '400': '#8da2fb',
    '500': '#6875f5',
    '600': '#5850ec',
    '700': '#5145cd',
    '800': '#42389d',
    '900': '#362f78',
  },
  purple: {
    '50': '#f6f5ff',
    '100': '#edebfe',
    '200': '#dcd7fe',
    '300': '#cabffd',
    '400': '#ac94fa',
    '500': '#9061f9',
    '600': '#7e3af2',
    '700': '#6c2bd9',
    '800': '#5521b5',
    '900': '#4a1d96',
  },
  pink: {
    '50': '#fdf2f8',
    '100': '#fce8f3',
    '200': '#fad1e8',
    '300': '#f8b4d9',
    '400': '#f17eb8',
    '500': '#e74694',
    '600': '#d61f69',
    '700': '#bf125d',
    '800': '#99154b',
    '900': '#751a3d',
  },
  'cool-gray': {
    '50': '#f8fafc',
    '100': '#f1f5f9',
    '200': '#e2e8f0',
    '300': '#cfd8e3',
    '400': '#97a6ba',
    '500': '#64748b',
    '600': '#475569',
    '700': '#364152',
    '800': '#27303f',
    '900': '#1a202e',
  },
}

const spacing = {
  px: '1px',
  '0': '0',
  '0.5': '0.125rem',
  '1': '0.25rem',
  '1.5': '0.375rem',
  '2': '0.5rem',
  '2.5': '0.625rem',
  '3': '0.75rem',
  '3.5': '0.875rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '7': '1.75rem',
  '8': '2rem',
  '9': '2.25rem',
  '10': '2.5rem',
  '11': '2.75rem',
  '12': '3rem',
  '13': '3.25rem',
  '14': '3.5rem',
  '15': '3.75rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '28': '7rem',
  '32': '8rem',
  '36': '9rem',
  '40': '10rem',
  '44': '11rem',
  '48': '12rem',
  '52': '13rem',
  '56': '14rem',
  '60': '15rem',
  '64': '16rem',
  '72': '18rem',
  '80': '20rem',
  '96': '24rem',
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
  full: '100%',
}

const boxShadow = {
  ...defaultTheme.boxShadow,
  solid: '0 0 0 2px currentColor',
  outline: `0 0 0 3px ${rgba(colors.blue[400], 0.45)}`,
  'outline-gray': `0 0 0 3px ${rgba(colors.gray[400], 0.45)}`,
  'outline-blue': `0 0 0 3px ${rgba(colors.blue[300], 0.45)}`,
  'outline-teal': `0 0 0 3px ${rgba(colors.teal[300], 0.45)}`,
  'outline-green': `0 0 0 3px ${rgba(colors.green[300], 0.45)}`,
  'outline-yellow': `0 0 0 3px ${rgba(colors.yellow[300], 0.45)}`,
  'outline-orange': `0 0 0 3px ${rgba(colors.orange[300], 0.45)}`,
  'outline-red': `0 0 0 3px ${rgba(colors.red[300], 0.45)}`,
  'outline-pink': `0 0 0 3px ${rgba(colors.pink[300], 0.45)}`,
  'outline-purple': `0 0 0 3px ${rgba(colors.purple[300], 0.45)}`,
  'outline-indigo': `0 0 0 3px ${rgba(colors.indigo[300], 0.45)}`,
}

const minWidth = {
  '0': '0',
  full: '100%',
  'min-content': 'min-content',
  'max-content': 'max-content',
}

const width = theme => ({
  auto: 'auto',
  ...theme('spacing'),
  screen: '100vw',
  'min-content': 'min-content',
  'max-content': 'max-content',
})

const maxWidth = (theme, { breakpoints }) => ({
  none: 'none',
  '0': '0rem',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '7xl': '80rem',
  full: '100%',
  'min-content': 'min-content',
  'max-content': 'max-content',
  prose: '65ch',
  ...breakpoints(theme('screens')),
})

const maxHeight = theme => ({
  screen: '100vh',
  ...theme('spacing'),
})

const inset = theme => ({
  auto: 'auto',
  ...theme('spacing'),
})

const customForms = theme => ({
  default: {
    input: {
      appearance: 'none',
      backgroundColor: colors.white,
      borderColor: colors.gray[300],
      borderWidth: defaultTheme.borderWidth.default,
      borderRadius: defaultTheme.borderRadius.md,
      paddingTop: spacing[2],
      paddingRight: spacing[3],
      paddingBottom: spacing[2],
      paddingLeft: spacing[3],
      fontSize: defaultTheme.fontSize.base,
      lineHeight: defaultTheme.lineHeight.normal,
      '&::placeholder': {
        color: colors.gray[400],
      },
      '&:focus': {
        outline: 'none',
        boxShadow: boxShadow['outline-blue'],
        borderColor: colors.blue[300],
      },
    },
    textarea: {
      appearance: 'none',
      backgroundColor: colors.white,
      borderColor: colors.gray[300],
      borderWidth: defaultTheme.borderWidth.default,
      borderRadius: defaultTheme.borderRadius.md,
      paddingTop: spacing[2],
      paddingRight: spacing[3],
      paddingBottom: spacing[2],
      paddingLeft: spacing[3],
      fontSize: defaultTheme.fontSize.base,
      lineHeight: defaultTheme.lineHeight.normal,
      '&::placeholder': {
        color: colors.gray[400],
        opacity: '1',
      },
      '&:focus': {
        outline: 'none',
        boxShadow: boxShadow['outline-blue'],
        borderColor: colors.blue[300],
      },
    },
    multiselect: {
      appearance: 'none',
      backgroundColor: colors.white,
      borderColor: colors.gray[300],
      borderWidth: defaultTheme.borderWidth.default,
      borderRadius: defaultTheme.borderRadius.md,
      paddingTop: spacing[2],
      paddingRight: spacing[3],
      paddingBottom: spacing[2],
      paddingLeft: spacing[3],
      fontSize: defaultTheme.fontSize.base,
      lineHeight: defaultTheme.lineHeight.normal,
      '&:focus': {
        outline: 'none',
        boxShadow: boxShadow['outline-blue'],
        borderColor: colors.blue[300],
      },
    },
    select: {
      appearance: 'none',
      colorAdjust: 'exact',
      '&::-ms-expand': {
        border: 'none', // The select padding is causing some whitespace around the chevron which looks weird with a border
        '@media not print': {
          display: 'none',
        },
      },
      backgroundRepeat: 'no-repeat',
      backgroundColor: colors.white,
      borderColor: colors.gray[300],
      borderWidth: defaultTheme.borderWidth.default,
      borderRadius: defaultTheme.borderRadius.md,
      paddingTop: spacing[2],
      paddingRight: spacing[10],
      paddingBottom: spacing[2],
      paddingLeft: spacing[3],
      fontSize: defaultTheme.fontSize.base,
      lineHeight: defaultTheme.lineHeight.normal,
      backgroundPosition: `right ${spacing[2]} center`,
      backgroundSize: `1.5em 1.5em`,
      iconColor: colors.gray[400],
      icon: iconColor =>
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"><path d="M7 7l3-3 3 3m0 6l-3 3-3-3" stroke="${iconColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      '&:focus': {
        outline: 'none',
        boxShadow: boxShadow['outline-blue'],
        borderColor: colors.blue[300],
      },
    },
    checkbox: {
      appearance: 'none',
      colorAdjust: 'exact',
      '&::-ms-check': {
        '@media not print': {
          color: 'transparent', // Hide the check
          background: 'inherit',
          borderColor: 'inherit',
          borderRadius: 'inherit',
        },
      },
      display: 'inline-block',
      verticalAlign: 'middle',
      backgroundOrigin: 'border-box',
      userSelect: 'none',
      flexShrink: 0,
      height: spacing[4],
      width: spacing[4],
      color: colors.blue[500],
      backgroundColor: colors.white,
      borderColor: colors.gray[300],
      borderWidth: defaultTheme.borderWidth.default,
      borderRadius: defaultTheme.borderRadius.default,
      iconColor: colors.white,
      icon: iconColor =>
        `<svg viewBox="0 0 16 16" fill="${iconColor}" xmlns="http://www.w3.org/2000/svg"><path d="M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z"/></svg>`,
      '&:focus': {
        outline: 'none',
        boxShadow: boxShadow['outline-blue'],
        borderColor: colors.blue[300],
      },
      '&:checked': {
        borderColor: 'transparent',
        backgroundColor: 'currentColor',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      },
      '&:checked:focus': {
        borderColor: 'transparent',
      },
    },
    radio: {
      appearance: 'none',
      colorAdjust: 'exact',
      '&::-ms-check': {
        '@media not print': {
          color: 'transparent', // Hide the check
          background: 'inherit',
          borderColor: 'inherit',
          borderRadius: 'inherit',
        },
      },
      display: 'inline-block',
      verticalAlign: 'middle',
      backgroundOrigin: 'border-box',
      userSelect: 'none',
      flexShrink: 0,
      borderRadius: '100%',
      height: spacing[4],
      width: spacing[4],
      color: colors.blue[500],
      backgroundColor: colors.white,
      borderColor: colors.gray[300],
      borderWidth: defaultTheme.borderWidth.default,
      iconColor: colors.white,
      icon: iconColor =>
        `<svg viewBox="0 0 16 16" fill="${iconColor}" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`,
      '&:focus': {
        outline: 'none',
        boxShadow: boxShadow['outline-blue'],
        borderColor: colors.blue[300],
      },
      '&:checked': {
        borderColor: 'transparent',
        backgroundColor: 'currentColor',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      },
      '&:checked:focus': {
        borderColor: 'transparent',
      },
    },
  },
})

const typography = theme => ({
  default: {
    css: {
      color: theme('colors.gray.700'),
      '[class~="lead"]': {
        color: theme('colors.gray.600'),
      },
      a: {
        color: theme('colors.indigo.600'),
        fontWeight: 600,
        textDecoration: 'none',
      },
      strong: {
        color: theme('colors.gray.900'),
      },
      'ol > li::before': {
        color: theme('colors.gray.500'), // 600
      },
      'ul > li::before': {
        backgroundColor: theme('colors.gray.300'), // 400
      },
      hr: {
        borderColor: theme('colors.gray.200'), // 300
      },
      blockquote: {
        color: theme('colors.gray.900'),
        borderLeftColor: theme('colors.gray.200'), // 300
      },
      'h1, h2, h3, h4': {
        color: theme('colors.gray.900'),
      },
      'figure figcaption': {
        color: theme('colors.gray.500'), // 600
      },
      code: {
        color: theme('colors.gray.900'),
      },
      pre: {
        color: theme('colors.gray.200'), // 300
        backgroundColor: theme('colors.gray.800'),
      },
      thead: {
        color: theme('colors.gray.900'),
        borderBottomColor: theme('colors.gray.300'), // 400
      },
      'tbody tr': {
        borderBottomColor: theme('colors.gray.200'), // 300
      },
    },
  },
})

module.exports = plugin.withOptions(
  function({ typography = true, customForms = true } = { typography: true, customForms: true }) {
    return function(pluginApi) {
      const { addUtilities, addVariant, theme, e, prefix, variants } = pluginApi

      if (typography) {
        typographyPlugin().handler(pluginApi)
      }
    }
  },
  function(options = {}) {
    return {
      theme: {
        ...(options.layout === 'sidebar'
          ? {
              screens: {
                sm: '640px',
                md: '1024px', // 768 + 256
                lg: '1280px', // 1024 + 256
                xl: '1536px', // 1280 + 256
              },
            }
          : {}),
        colors,
        spacing,
        boxShadow,
        width,
        minWidth,
        maxWidth,
        maxHeight,
        inset,
        customForms: customForms,
        typography,
      },
      variants: {
        backgroundColor: ({ before, after }) =>
          before(['group-hover', 'group-focus'], 'hover', after(['active'])),
        borderColor: ({ before }) =>
          before(['focus-within'], 'focus', before(['group-hover', 'group-focus'], 'hover')),
        boxShadow: ({ before }) =>
          before(['focus-within'], 'focus', before(['group-focus'], 'hover')),
        opacity: ({ before }) => before(['focus-within', 'group-hover', 'group-focus'], 'hover'),
        textColor: ({ before, after }) =>
          before(
            ['focus-within'],
            'focus',
            before(['group-hover', 'group-focus'], 'hover', after(['active']))
          ),
        textDecoration: ({ before }) => before(['group-hover', 'group-focus'], 'hover'),
        textDecoration: ['responsive', 'group-hover', 'group-focus', 'hover', 'focus'],
        zIndex: ({ after }) => after(['focus-within', 'focus']),
        typography: ['responsive'],
      },
    }
  }
)