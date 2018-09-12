import styled from 'styled-components'
import { variant } from 'styled-system'

import Text from './Text'
import { themed } from '../utils'

const headVariant = variant({
  prop: 'variant',
  key: 'heading.variant'
})

const Heading = styled(Text)(
  themed('heading.base'),
  headVariant
)

Heading.defaultProps = {
  as: 'h2'
}

export default Heading