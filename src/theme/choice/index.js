// FIXME: add flow type
import colors from './colors'
import space from './space'
import fontSizes from './fontSize'
import fontWeights from './fontWeights'
import hover from './hover'
import float from './float'
import { width, minWidths, maxWidths } from './sizes'
import fonts from './fonts'
import { radii, shadows, opacity } from './misc'
import copy from './copy'
import borders from './border'
import { lineHeights, letterSpacings } from './paragraph'


const defaultChoice = {
  mobileDevice: '30em',
  tableLetDevice: '60em',
  width,

  space,
  fontSizes,
  colors,
  fonts,
  lineHeights,
  fontWeights,
  letterSpacings,
  maxWidths,
  minWidths,
  radii,
  borders,
  shadows,
  opacity,

  hover,
  float,
  copy,
}

export default defaultChoice