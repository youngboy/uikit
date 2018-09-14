import styled from 'styled-components'
import {
  space,
  color,
  width,
  fontSize,
  textAlign,
  maxWidth,
  maxHeight,
  height,
} from 'styled-system'
import Base from './Base'
import { injectDisplay } from '../utils'


const Box = styled(Base)(
  space,
  width,
  height,
  fontSize,
  color,
  maxHeight,
  maxWidth,
  textAlign
)

Box.displayName = 'Box'
Box.propTypes = {
  ...Base.propTypes,
  ...injectDisplay({
    ...textAlign.propTypes,
    ...space.propTypes,
    ...width.propTypes,
    ...height.propTypes,
    ...fontSize.propTypes,
    ...color.propTypes,
    ...maxHeight.propTypes,
    ...maxWidth.propTypes
  }, Box)
}

export default Box
