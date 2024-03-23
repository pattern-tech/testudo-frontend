module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './scenes/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'rgb(33 100 135)',
          DEFAULT: '#703CD0',
          dark: 'rgb(146 206 245)',
        },
        onPrimary: {
          light: 'rgb(255 255 255)',
          DEFAULT: '#FFFFFF',
          dark: 'rgb(0 52 75)',
        },
        primaryContainer: {
          light: 'rgb(198 231 255)',
          DEFAULT: '#EADDFF',
          dark: 'rgb(0 76 107)',
        },
        onPrimaryContainer: {
          light: 'rgb(0 30 45)',
          DEFAULT: '#25005A',
          dark: 'rgb(198 231 255)',
        },
        primaryFixed: {
          light: 'rgb(198 231 255)',
          DEFAULT: '#EADDFF',
          dark: 'rgb(198 231 255)',
        },
        onPrimaryFixed: {
          light: 'rgb(0 30 45)',
          DEFAULT: '#25005A',
          dark: 'rgb(0 30 45)',
        },
        primaryFixedDim: {
          light: 'rgb(146 206 245)',
          DEFAULT: '#D2BCFF',
          dark: 'rgb(146 206 245)',
        },
        onPrimaryFixedVariant: {
          light: 'rgb(0 76 107)',
          DEFAULT: '#581AB7',
          dark: 'rgb(0 76 107)',
        },
        secondary: {
          light: 'rgb(79 97 110)',
          DEFAULT: '#005EB2',
          dark: 'rgb(182 201 216)',
        },
        onSecondary: {
          light: 'rgb(255 255 255)',
          DEFAULT: '#FFFFFF',
          dark: 'rgb(33 50 62)',
        },
        secondaryContainer: {
          light: 'rgb(210 229 244)',
          DEFAULT: '#D5E3FF',
          dark: 'rgb(55 73 85)',
        },
        onSecondaryContainer: {
          light: 'rgb(11 29 40)',
          DEFAULT: '#001B3C',
          dark: 'rgb(210 229 244)',
        },
        secondaryFixed: {
          light: 'rgb(210 229 244)',
          DEFAULT: '#D5E3FF',
          dark: 'rgb(210 229 244)',
        },
        onSecondaryFixed: {
          light: 'rgb(11 29 40)',
          DEFAULT: '#001B3C',
          dark: 'rgb(11 29 40)',
        },
        secondaryFixedDim: {
          light: 'rgb(182 201 216)',
          DEFAULT: '#A7C8FF',
          dark: 'rgb(182 201 216)',
        },
        onSecondaryFixedVariant: {
          light: 'rgb(55 73 85)',
          DEFAULT: '#004788',
          dark: 'rgb(55 73 85)',
        },
        tertiary: {
          light: 'rgb(98 89 124)',
          DEFAULT: '#7E525E',
          dark: 'rgb(204 193 233)',
        },
        onTertiary: {
          light: 'rgb(255 255 255)',
          DEFAULT: '#FFFFFF',
          dark: 'rgb(51 44 75)',
        },
        tertiaryContainer: {
          light: 'rgb(232 221 255)',
          DEFAULT: '#FFD9E1',
          dark: 'rgb(74 66 99)',
        },
        onTertiaryContainer: {
          light: 'rgb(30 22 53)',
          DEFAULT: '#31101C',
          dark: 'rgb(232 221 255)',
        },
        tertiaryFixed: {
          light: 'rgb(232 221 255)',
          DEFAULT: '#FFD9E1',
          dark: 'rgb(232 221 255)',
        },
        onTertiaryFixed: {
          light: 'rgb(30 22 53)',
          DEFAULT: '#31101C',
          dark: 'rgb(30 22 53)',
        },
        tertiaryFixedDim: {
          light: 'rgb(204 193 233)',
          DEFAULT: '#F0B8C6',
          dark: 'rgb(204 193 233)',
        },
        onTertiaryFixedVariant: {
          light: 'rgb(74 66 99)',
          DEFAULT: '#643B47',
          dark: 'rgb(74 66 99)',
        },
        error: {
          light: 'rgb(144 74 75)',
          DEFAULT: '#BA1437',
          dark: 'rgb(255 179 178)',
        },
        onError: {
          light: 'rgb(255 255 255)',
          DEFAULT: '#FFFFFF',
          dark: 'rgb(86 29 32)',
        },
        errorContainer: {
          light: 'rgb(255 218 217)',
          DEFAULT: '#FFDADA',
          dark: 'rgb(115 51 53)',
        },
        onErrorContainer: {
          light: 'rgb(59 8 13)',
          DEFAULT: '#40000B',
          dark: 'rgb(255 218 217)',
        },
        outline: {
          light: 'rgb(113 120 126)',
          DEFAULT: '#7A757F',
          dark: 'rgb(139 145 152)',
        },
        background: {
          light: 'rgb(246 250 254)',
          DEFAULT: '#FFFBFF',
          dark: 'rgb(15 20 23)',
        },
        onBackground: {
          light: 'rgb(24 28 31)',
          DEFAULT: '#1D1B1E',
          dark: 'rgb(223 227 231)',
        },
        surface: {
          light: 'rgb(246 250 254)',
          DEFAULT: '#FDF8FD',
          dark: 'rgb(15 20 23)',
        },
        onSurface: {
          light: 'rgb(24 28 31)',
          DEFAULT: '#1D1B1E',
          dark: 'rgb(223 227 231)',
        },
        surfaceVariant: {
          light: 'rgb(221 227 234)',
          DEFAULT: '#E7E0EB',
          dark: 'rgb(65 72 77)',
        },
        onSurfaceVariant: {
          light: 'rgb(65 72 77)',
          DEFAULT: '#49454E',
          dark: 'rgb(193 199 206)',
        },
        inverseSurface: {
          light: 'rgb(45 49 53)',
          DEFAULT: '#323033',
          dark: 'rgb(223 227 231)',
        },
        inverseOnSurface: {
          light: 'rgb(238 241 246)',
          DEFAULT: '#F5EFF4',
          dark: 'rgb(45 49 53)',
        },
        inversePrimary: {
          light: 'rgb(146 206 245)',
          DEFAULT: '#D2BCFF',
          dark: 'rgb(33 100 135)',
        },
        shadow: {
          light: 'rgb(0 0 0)',
          DEFAULT: '#000000',
          dark: 'rgb(0 0 0 / 85%)',
        },
        surfaceTint: {
          light: 'rgb(33 100 135)',
          DEFAULT: '#703CD0',
          dark: 'rgb(146 206 245)',
        },
        outlineVariant: {
          light: 'rgb(193 199 206)',
          DEFAULT: '#CBC4CF',
          dark: 'rgb(65 72 77)',
        },
        scrim: {
          light: 'rgb(0 0 0)',
          DEFAULT: '#000000',
          dark: 'rgb(0 0 0)',
        },
        surfaceContainerHighest: {
          light: 'rgb(223 227 231)',
          DEFAULT: '#E6E1E6',
          dark: 'rgb(49 53 57)',
        },
        surfaceContainerHigh: {
          light: 'rgb(229 232 237)',
          DEFAULT: '#ECE6EB',
          dark: 'rgb(38 42 46)',
        },
        surfaceContainer: {
          light: 'rgb(235 238 243)',
          DEFAULT: '#F2ECF1',
          dark: 'rgb(28 32 36)',
        },
        surfaceContainerLow: {
          light: 'rgb(240 244 248)',
          DEFAULT: '#F8F2F7',
          dark: 'rgb(24 28 31)',
        },
        surfaceContainerLowest: {
          light: 'rgb(255 255 255)',
          DEFAULT: '#FFFFFF',
          dark: 'rgb(10 15 18)',
        },
        surfaceBright: {
          light: 'rgb(246 250 254)',
          DEFAULT: '#FDF8FD',
          dark: 'rgb(53 58 61)',
        },
        surfaceDim: {
          light: 'rgb(215 218 223)',
          DEFAULT: '#DED8DD',
          dark: 'rgb(15 20 23)',
        },
        green: {
          light: '#056E00',
          DEFAULT: '#056E00',
          dark: '#00CA81',
        },
        orange: {
          light: '#FF8022',
          DEFAULT: '#FF8022',
        },
        pink: {
          light: '#ED24D9',
          DEFAULT: '#ED24D9',
        },
        yellow: {
          light: '#EBC13E',
          DEFAULT: '#EBC13E',
        },
      },
      fontSize: {
        'display-large': ['3.5625rem', { fontWeight: 400, lineHeight: '4rem' }],
        'display-medium': [
          '2.8125rem',
          { fontWeight: 400, lineHeight: '3.25rem' },
        ],
        'display-small': [
          '2.25rem',
          { fontWeight: 400, lineHeight: '2.75rem' },
        ],
        'headline-large': ['2rem', { fontWeight: 400, lineHeight: '2.5rem' }],
        'headline-medium': [
          '1.75rem',
          { fontWeight: 400, lineHeight: '2.25rem' },
        ],
        'headline-small': ['1.5rem', { fontWeight: 400, lineHeight: '2rem' }],
        'body-large': ['1rem', { fontWeight: 400, lineHeight: '1.5rem' }],
        'body-medium': [
          '0.875rem',
          {
            fontWeight: 400,
            lineHeight: '1.25rem',
          },
        ],
        'body-small': ['0.75rem', { fontWeight: 400, lineHeight: '1rem' }],
        'label-large': [
          '0.875rem',
          {
            fontWeight: 500,
            lineHeight: '1.25rem',
          },
        ],
        'label-medium': ['0.75rem', { fontWeight: 500, lineHeight: '1rem' }],
        'label-small': ['0.875rem', { fontWeight: 500, lineHeight: '1.25rem' }],
        'title-large': ['1.375rem', { fontWeight: 700, lineHeight: '1.5rem' }],
        'title-semi-bold': [
          '0.875rem',
          {
            fontWeight: 600,
            lineHeight: '1.25rem',
          },
        ],
        'title-semi-large': [
          '1.125rem',
          {
            fontWeight: 700,
            lineHeight: '1.375rem',
          },
        ],
        'title-medium': ['1rem', { fontWeight: 600, lineHeight: '1.5rem' }],
        'title-small': [
          '0.875rem',
          {
            fontWeight: 500,
            lineHeight: '1.25rem',
          },
        ],
      },
    },
  },
  plugins: [],
};
