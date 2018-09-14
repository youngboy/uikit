// hover http://tachyons.io/docs/themes/hovers/
const hover = {
  dim: {
    opacity: 1,
    transition: 'opacity .15s ease-in',

    '&:hover': {
      opacity: .5,
    },
    '&:active': {
      opacity: .8,
    },
  },
  // not working on span a ..
  grow: {
    '-moz-osx-font-smoothing': 'grayscale',
    backfaceVisibility: 'hidden',
    transform: 'translateZ(0)',
    transition: 'transform 0.25s ease-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
    '&:active': {
      transform: 'scale(.90)',
    },
  },
  underline: {
    '&:hover': { textDecoration: 'underline' },
    '&:focus': { textDecoration: 'underline' },
  }
}

export default hover