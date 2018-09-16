function variant(choice) {
  return {
  }
}

function heading(choice) {
  return {
    base: {
      fontWeight: choice.fontWeights.heading,
      lineHeight: choice.lineHeights.heading,
      fontSize: choice.fontSizes.heading,
      padding: 0,
    },
    variant: variant(choice)
  }
}


export default heading