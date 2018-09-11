import { createGlobalStyle } from 'styled-components'

import { themed } from '../../utils'
import normalize from './normalize'
import boxsizing from './boxsizing'

const Global = createGlobalStyle(
  normalize,
  boxsizing,
  themed('global')
)

export default Global