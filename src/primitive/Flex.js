import styled from 'styled-components'
import {
  flex,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
} from 'styled-system'

import Box from './Box'
import { injectDisplay } from '../utils'


export const Flex = styled(Box)({
  display: 'flex'
},
  flex,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
)

Flex.displayName = 'flex'
Flex.propTypes = {
  ...Box.propTypes,
  ...injectDisplay({
    ...flexWrap.propTypes,
    ...flexDirection.propTypes,
    ...alignItems.propTypes,
    ...justifyContent.propTypes
  }, Flex)
}

export default Flex
