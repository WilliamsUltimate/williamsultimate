module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          shadow: '#393939'
        }
      },
      backgroundImage: theme => ({
        'wufo': "url('assets/wufopics/danny-kaizen.JPG')"
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
