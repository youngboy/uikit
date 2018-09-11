import styled from 'styled-components'
import {
  space,
  color,
  width,
  fontSize,
  maxWidth,
  maxHeight,
  height,
} from 'styled-system'
import Base from './Base'

const Box = styled(Base)(
  space,
  width,
  height,
  fontSize,
  color,
  maxHeight,
  maxWidth,
)

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes
}

export default Box
