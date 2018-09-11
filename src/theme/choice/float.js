const float = {
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
}

export default float