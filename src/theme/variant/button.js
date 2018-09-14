function variant(choice) {
  return {
    default: {
      color: choice.colors.default,
      background: choice.colors.defaultBg,
    },
  }
}

function buttonSize() {
  return {
    default: {
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

    },
    variant: variant(choice),
    size: buttonSize(choice)
  }
}


export default button