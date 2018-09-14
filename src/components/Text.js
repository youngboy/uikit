import styled from 'styled-components'
import {
  fontFamily,
  fontWeight,
  lineHeight,
  letterSpacing
} from 'styled-system'
import { Box } from '../primitive'


const Text = styled(Box)(
  fontFamily,
  fontWeight,
  lineHeight,
  letterSpacing,
)


export default Text