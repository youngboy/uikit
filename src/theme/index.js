import createTheme from './createTheme'
import withTheme from './provider'
import RockTheme from './plugin/rock'
import GoTheme from './plugin/go'

const BlankTheme = createTheme().theme
export {
  createTheme,
  withTheme,
  BlankTheme,
  RockTheme,
  GoTheme
}