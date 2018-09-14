// FIXME: add flow type
import colors from './colors'
import space from './space'
import fontSizes from './fontSize'
import fontWeights from './fontWeights'
import fonts from './fonts'
import { radii, shadows, opacity } from './misc'
import copy from './copy'
import borders from './border'
import { lineHeights, letterSpacings } from './paragraph'


const defaultChoice = {
  mobileDevice: '30em',
  tabletDevice: '60em',

  space,
  fontSizes,
  colors,
  fonts,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
  borders,
  shadows,
  opacity,

  copy,
}

export default defaultChoice