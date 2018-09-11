function heading(choice) {
  const defaultV = {
    fontWeight: choice.fontWeights.heading,
    lineHeight: choice.lineHeights.heading,
    fontSize: choice.fontSizes.heading,
    padding: 0,
  }
  return {
    default: defaultV,
    h1: {
      fontSize: choice.fontSizes.h1,
    },
    h2: {
      fontSize: choice.fontSizes.h2,
    },
    h3: {
      fontSize: choice.fontSizes.h3,
    },
    h4: {
      fontSize: choice.fontSizes.h4,
    },
    h5: {
      fontSize: choice.fontSizes.h5,
    }
  }
}

export default heading