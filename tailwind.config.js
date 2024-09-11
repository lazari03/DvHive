// eslint-disable-next-line no-undef
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        fill: '-webkit-fill-available'
      },
      fill: {
        'custom-gradient': 'linear-gradient(-140deg, #FDCE83, #FFE6BF)'
      },
      width: {
        fill: '-webkit-fill-available'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(-140deg, #FDCE83, #FFE6BF)'
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)'
      }
    }
  },
  plugins: [
    require('tailwindcss-animated'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value
          })
        },
        { values: theme('textShadow') }
      )
    })
  ]
}
