import type { Config } from 'tailwindcss';

const colors = {
  gold: {
    '50': '#f8f6ee',
    '100': '#ede7d4',
    '200': '#dcd0ac',
    '300': '#c8b17c',
    '400': '#bea066',
    '500': '#a98449',
    '600': '#916a3d',
    '700': '#745134',
    '800': '#634430',
    '900': '#563a2d',
    '950': '#311e17',
  },
  black: '#1a1a1a',
};

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
        serif: ['Noto Serif', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            'font-family': '"Noto Sans", sans-serif',
            color: colors.black,

            'h1,h2,h3,h4': {
              'font-family': '"Noto Serif", serif',
              'font-weight': '700',
              'text-decoration': 'none',
              'line-height': '1 ',
              color: colors.black,
            },
            
            'h2 + h4': {
              'font-family': '"Noto Serif", serif',
              'font-size': '1.125rem',
              'font-style': 'italic',
              'margin-top': '-0.5rem',
              'margin-bottom': '2rem',
              'text-align': 'center',
              'font-weight': '400',
              color: colors.gold[400],
            },

            h1: {
              'font-family': '"Noto Serif", serif',
              'font-size': '2.25rem',
              'font-weight': '700',
              'margin-top': '2rem',
              'margin-bottom': '2rem',
              'text-align': 'center',
              color: colors.black,
            },

            h2: {
              'font-family': '"Noto Serif", serif',
              'font-size': '2rem',
              'font-weight': '700',
              'margin-top': '3rem',
              'margin-bottom': '0.5rem',
              'text-align': 'center',
              'padding-bottom': '0.5rem',
              color: colors.black,
            },

            h3: {
              'font-family': '"Noto Serif", serif',
              'font-size': '1.25rem',
              'font-weight': '600',
              'margin-top': '4rem',
              'margin-bottom': '0.5rem',
              'text-align': 'left',
              color: colors.gold[400],
            },

            h4: {
              'font-family': '"Noto Serif", serif',
              'font-size': '1.25rem',
              'font-weight': '400',
              'font-style': 'italic',
              'margin-top': '1.5rem',
              'margin-bottom': '0.75rem',
              'text-align': 'left',
              color: colors.gold[400],
            },

            a: {
              color: colors.gold[400],
              '&:hover': {
                color: colors.gold[600],
              },
            },

            blockquote: {
              borderLeftColor: colors.gold[400],
            },

            p: {
              'line-height': '1.25',
            },

            ul: {
              li: {
                '&::marker': {
                  color: colors.gold[400],
                },
                'line-height': '1.25',
                'margin-top': '0.25rem',
                'margin-bottom': '0.25rem',
              },
            },

            table: {
              borderCollapse: 'collapse',
              width: '100%',
              marginBottom: '1.5rem',
            },
            
            'thead th': {
              borderBottom: `1px solid ${colors.gold[400]}`,
              padding: '0.75rem',
            },

            'tbody td': {
              borderBottom: `1px solid ${colors.gold[400]}`,
              borderTop: `1px solid ${colors.gold[400]}`,
              padding: '0.75rem',
              textAlign: 'center',
            },

            'tbody tr': {
              borderBottom: `1px solid ${colors.gold[400]}`,
              borderTop: `1px solid ${colors.gold[400]}`,
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
