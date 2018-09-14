import styled from 'styled-components'

import Text from './Text'
import { themed, variant, injectDisplay } from '../utils'

const headVariant = variant({
  prop: 'variant',
  key: 'heading.variant'
})

const themedHeading = themed('heading.base')

const Heading = styled(Text)(
  themedHeading,
  headVariant
)

Heading.displayName = 'Heading'

Heading.propTypes = {
  ...Text.propTypes,
  ...injectDisplay({
    ...themedHeading.propTypes,
    ...headVariant.propTypes
  }, Heading)
}

Heading.defaultProps = {
  as: 'h2'
}

export default Heading