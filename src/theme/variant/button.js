function button(choice) {
  return {
    default: {
      color: choice.colors.default,
      background: choice.colors.blue,
      borderRadius: '.5rem',
      border: `.125rem ${choice.colors.default} solid`,
      marginRight: '1rem',
      ...choice.hover.dim
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

export { button, buttonSize }