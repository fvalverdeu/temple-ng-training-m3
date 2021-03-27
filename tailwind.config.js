module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'bold': ['Montserrat-Bold'],
        'medium': ['Montserrat-Medium'],
        'regular': ['Montserrat-Regular'],
      },
      colors: {
        // primary: '#11B1FC',
        // 'primary-lite': '#D7F2FF',

        // secondary: '#354A6A',
        // 'secondary-lite': '#DFDFDF',

        complementary: '#615F5F',
        'complementary-lite': '#ABA5A5',
        'complementary-light': '#F3F1F1',

        dark: '#000000',
        default: '#FFFFFF',

        'alert-error': '#FF134C',

        'high-emphasis': 'rgba(0, 0, 0, 0.87)',
        'medium-emphasis': 'rgba(0, 0, 0, 0.6)',
        disabled: 'rgba(0, 0, 0, 0.38)',

        primary: {
          DEFAULT: '#11b1fc',
          lite: '#D7F2FF',
          50 : '#e2f6ff',
          100 : '#b8e8fe',
          200 : '#88d8fe',
          300 : '#58c8fd',
          400 : '#35bdfc',
          500 : '#11b1fc',
          600 : '#0faafc',
          700 : '#0ca1fb',
          800 : '#0a98fb',
          900 : '#0588fa',
          A100 : '#ffffff',
          A200 : '#eef6ff',
          A400 : '#bbdcff',
          A700 : '#a2cfff',
        },
        secondary: {
          DEFAULT: '#354A6A',
          lite: '#DFDFDF',
          50 : '#e7e9ed',
          100 : '#c2c9d2',
          200 : '#9aa5b5',
          300 : '#728097',
          400 : '#536580',
          500 : '#354a6a',
          600 : '#304362',
          700 : '#283a57',
          800 : '#22324d',
          900 : '#16223c',
          A100 : '#7ba3ff',
          A200 : '#4880ff',
          A400 : '#155cff',
          A700 : '#004cfb',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  // plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
