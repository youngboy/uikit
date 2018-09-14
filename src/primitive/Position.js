import styled from 'styled-components'
import {
  position,
  zIndex,
  top,
  right,
  bottom,
  left
} from 'styled-system'
import Box from './Box'
import { injectDisplay } from '../utils'


const Position = styled(Box)(
  position,
  zIndex,
  top,
  right,
  bottom,
  left
)
export default Position

Position.displayName = 'Position'
Position.propTypes = {
  ...Box.propTypes,
  ...injectDisplay({
    ...position.propTypes,
    ...zIndex.propTypes,
    ...top.propTypes,
    ...right.propTypes,
    ...bottom.propTypes,
    ...left.propTypes
  }, Position)
}


export const Relative = styled(Position)([])

Relative.defaultProps = {
  position: 'relative'
}

export const Absolute = styled(Position)([])

Absolute.defaultProps = {
  position: 'absolute'
}

export const Fixed = styled(Position)([])

Fixed.defaultProps = {
  position: 'fixed'
}

export const Sticky = styled(Position)([])

Sticky.defaultProps = {
  position: 'sticky'
}
