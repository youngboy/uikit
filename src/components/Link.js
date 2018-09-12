import styled from 'styled-components'
import { variant } from 'styled-system'

import { Box } from '../primitive'
import { themed } from '../utils'


const linkVariant = variant({
  prop: 'variant',
  key: 'link.variant'
})

const linkStatusVariant = variant({
  prop: 'status',
  key: 'link.status'
})


const Link = styled(Box)(
  themed('link.base'),
  linkVariant,
  linkStatusVariant
)

Link.defaultProps = {
  as: 'a'
}

export default Link