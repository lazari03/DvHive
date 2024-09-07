// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        fill: '-webkit-fill-available'
      },
      fill:{
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
      }
    }
  },
  plugins: []
}
