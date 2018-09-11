import merge from 'lodash/merge'
import defaultChoice from './choice'
import defaultVariant from './variant'

/**
 * Create UIkit theme
 * - [x] allow defined all available variables(choice), and mapping(decision)
 * - [x] allow compose utils stylings func
 * - [x] allow inject customized variant stylings
 * - [ ] can be visulize and easy to manage
 * - [ ] allow minify theme object that only in used... ?
 */
export default function( extraChoice={} ) {

  const choice = merge({}, defaultChoice, extraChoice)

  const theme = {
    breakpoints: [choice.mobileDevice, choice.tableLetDevice],

    global: {
      html: {
        fontSize: choice.fontSizes.text
      }
    },

    // TODO: remove preset
    // - inherit css rules can be used by global component
    // wait untill Global component fully tested
    rootPreset: {
      color: choice.colors.default,
      background: choice.colors.defaultBg,
      fontFamily: choice.fonts.default,
      fontSize: choice.fontSizes.text,
      lineHeight: choice.lineHeights.copy,
      wordWrap: 'break-word',
    },

    ...defaultVariant(choice),

    // convenient props accessed from styled-system
    ...defaultChoice.space,
    ...defaultChoice.fontSizes,
    ...defaultChoice.colors,
    ...defaultChoice.fonts,
    ...defaultChoice.lineHeights,
    ...defaultChoice.fontWeights,
    ...defaultChoice.letterSpacings,
    ...defaultChoice.maxWidths,
    ...defaultChoice.minWidths,
    ...defaultChoice.radii,
    ...defaultChoice.borders,
    ...defaultChoice.shadows,
    ...defaultChoice.opacity,

  }

  const extend = (extendedDecision) => {
    return merge({}, theme, extendedDecision(theme))
  }

  return {
    theme,
    extend,
  }
}