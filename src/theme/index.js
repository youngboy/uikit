import createTheme from './createTheme'
import withTheme from './provider'
import TachyonsTheme from './plugin/tachyons'
import GoTheme from './plugin/go'

const BlankTheme = createTheme().theme
export {
  createTheme,
  withTheme,
  BlankTheme,
  TachyonsTheme,
  GoTheme
}