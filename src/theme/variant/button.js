function variant(choice) {
  return {
    default: {
      color: choice.colors.default,
      background: choice.colors.blue,
      borderRadius: '.5rem',
      border: `.125rem ${choice.colors.default} solid`,
      marginRight: '1rem',
    },
  }
}

function buttonSize() {
  return {
    default: {
      padding: '1rem',
      fontSize: '.875rem',
      lineHeight: '1.14286'
    }
  }
}

const button = (choice) => {
  return {
    base: {
      appearance: 'none',
      display: 'inline-block',
      textAlign: 'center',
      lineHeight: 'inherit',
      textDecoration: 'none',
      '&.focus': {
        outline: 'none',
      },

      ...choice.hover.dim
    },
    variant: variant(choice),
    size: buttonSize(choice)
  }
}


export default button