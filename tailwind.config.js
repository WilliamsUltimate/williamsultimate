module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'pt': ['PT Serif', 'sans-serif'] 
      },
      colors: {
        gray: {
          shadow: '#393939'
        },
        wurple: '#4C1D95'
      },
      backgroundImage: theme => ({
        'wufo': "url('assets/wufopics/kaizen-nick.jpg')",
        'nova': "url('assets/novapics/lauren-disc.JPG')",
        'buf': "url('assets/bufpics/bufteam.png')"
      })
    },
    boxShadow: {
      drop: '8px 8px 0px 0px #393939'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
