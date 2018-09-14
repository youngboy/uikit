import styled from 'styled-components'

import { Box } from '../primitive'
import { themed, variant, injectDisplay } from '../utils'


const linkVariant = variant({
  prop: 'variant',
  key: 'link.variant'
})

const linkStatusVariant = variant({
  prop: 'status',
  key: 'link.status'
})

const themedLink = themed('link.base')

const Link = styled(Box)(
  themedLink,
  linkVariant,
  linkStatusVariant
)

Link.displayName = 'Link'

Link.propTypes = {
  ...Box.propTypes,
  ...injectDisplay({
    ...linkVariant.propTypes,
    ...linkStatusVariant.propTypes,
    ...themedLink.propTypes
  }, Link)
}

Link.defaultProps = {
  as: 'a',
  variant: 'default'
}

export default Link