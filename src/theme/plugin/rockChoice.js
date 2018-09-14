import hover from './hover'
// FIXME: this is not exposed to width/size function
// consider move it to another themedKey
// const width = {
//   1: '1rem',
//   2: '2rem',
//   3: '4rem',
//   4: '8rem',
//   5: '16rem',
// }

const rockChoice = {
  hover,
  fontSizes: {
    1: '3rem',
    2: '2.25rem',
    3: '1.5rem',
    4: '1.25rem',
    5: '1rem',
    6: '.875rem',
    7: '.75rem', /* Small and hard to read for many people so use with extreme caution */

    // For Hero/Marketing Titles
    //
    // These generally are too large for mobile
    // so be careful using them on smaller screens.
    x6: '6rem',
    headline: '6rem',
    x5: '5rem',
    subheadline: '5rem',
  },
  colors: {
    navBg: 'rgb(30, 32, 41)',
    black: '#000',
    blacks: {
      near: '#111',
      10: 'rgba(0,0,0,.1)',
      20: 'rgba(0,0,0,.2)',
      30: 'rgba(0,0,0,.3)',
      40: 'rgba(0,0,0,.4)',
      50: 'rgba(0,0,0,.5)',
      60: 'rgba(0,0,0,.6)',
      70: 'rgba(0,0,0,.7)',
      80: 'rgba(0,0,0,.8)',
      90: 'rgba(0,0,0,.9)',
    },

    white: '#fff',
    whites: {
      near: '#f4f4f4',
      10: 'rgba(255,255,255,.1)',
      20: 'rgba(255,255,255,.2)',
      30: 'rgba(255,255,255,.3)',
      40: 'rgba(255,255,255,.4)',
      50: 'rgba(255,255,255,.5)',
      60: 'rgba(255,255,255,.6)',
      70: 'rgba(255,255,255,.7)',
      80: 'rgba(255,255,255,.8)',
      90: 'rgba(255,255,255,.9)',
    },
    silver: '#999',
    silvers: {
      light: '#aaa',
    },

    gray: '#777',
    grays: {
      dark: '#333',
      mid: '#555',
      moon: '#ccc',
      light: '#eee'
    },

    red: '#ff4136',
    reds: {
      light: '#ff725c',
      dark: '#e7040f',
      washed: '#ffdfdf'
    },

    yellow: '#ffd700',
    yellows: {
      light: '#fbf1a9',
      washed: '#fffceb',
      lightest: '#ffff00',
    },

    purple: '#5e2ca5',
    purples: {
      light: '#a463f2',
    },

    pink: '#ff80cc',
    pinks: {
      dark: '#d5008f',
      hot: '#ff41b4',
      light: '#ffa3d7',
    },

    green: '#19a974',
    greens: {
      dark: '#137752',
      light: '#9eebcf',
      washed: '#e8fdf5',
    },

    blue: '#357edd',
    blues: {
      light: '#96ccff',
      lightest: '#cdecff',
      dark: '#00449e',
      washed: '#f6fffe',
    },

    gold: '#ffb700',
    orange: '#ff6300',
    navy: '#001b44',
  },
  fonts: {
    courier: '"Courier Next", courier, monospace',
    /* Sans-Serif Typefaces (without .) */
    helvetica: '"helvetica neue", helvetica, sans-serif',
    avenir: '"avenir next", avenir, sans-serif',
    /* Serif Typefaces (with .) */
    athelas: 'athelas, georgia, serif',
    georgia: 'georgia, serif',
    times: 'times, serif',
    bodoni: '"Bodoni MT", serif',
    calisto: '"Calisto MT", serif',
    garamond: 'garamond, serif',
    baskerville: 'baskerville, serif',

    github: "-apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  },
  float: {
    fl: {
      float: 'left',
      '_display': 'inline',
    },
    cf: {
      '*zoom': 1,
      '&:before': {
        content: '" "',
        display: 'table',
      },
      '&:after': {
        content: '" "',
        display: 'table',
        clear: 'both'
      }
    },
  },
  maxWidths: {
    large: '48rem',

    //.measure = line lengths ~66 characters
    //.measure-narrow = line lengths ~45 characters
    //.measure-wide = line lengths ~80 characters
    measure: '30rem',
    measureWide: '34rem',
    measureNarrow: '20rem',
  },
  minWidths: {
    large: '48rem',

    //.measure = line lengths ~66 characters
    //.measure-narrow = line lengths ~45 characters
    //.measure-wide = line lengths ~80 characters
    measure: '30rem',
    measureWide: '34rem',
    measureNarrow: '20rem',
  }
}

export default rockChoice