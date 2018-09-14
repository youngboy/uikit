// preset rule by tag name
function variant(choice) {
  return {
    default: {
    }
  }
}

export default function preset(choice) {
  return {
    base: {
      color: choice.colors.default,
      background: choice.colors.defaultBg,
      fontFamily: choice.fonts.default,
      fontSize: choice.fontSizes.text,
      lineHeight: choice.lineHeights.copy,
      wordWrap: 'break-word',
    },
    variant: variant(choice)
  }
}