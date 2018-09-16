import styled from 'styled-components'
import {
  space,
  color,
  width,
  fontSize,
  height,
} from 'styled-system'

import { css, themed, variant, injectDisplay } from '../utils'


const linkVariant = variant({
  prop: 'variant',
  key: 'link.variant'
})

const linkStatusVariant = variant({
  prop: 'status',
  key: 'link.status'
})

const themedLink = themed('link.base')

const Link = styled('a')(
  themedLink,
  linkVariant,
  linkStatusVariant,

  space,
  color,
  width,
  fontSize,
  height,
  css
)

Link.displayName = 'Link'

Link.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...height.propTypes,
  ...css.propTypes,
  ...injectDisplay({
    ...linkVariant.propTypes,
    ...linkStatusVariant.propTypes,
    ...themedLink.propTypes
  }, Link)
}

Link.defaultProps = {
  variant: 'default'
}

export default Link