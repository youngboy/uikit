import styled from 'styled-components'
import {
  space,
  color,
  width,
  fontSize,
  height,
} from 'styled-system'

import { css, themed, variant, injectDisplay } from '../utils'


const buttonVariant = variant({
  prop: 'variant',
  key: 'button.variant'
})

const buttonSize = variant({
  prop: 'btnSize',
  key: 'button.size'
})

const themedButton = themed('button.base')

const Button = styled('button')(
  themedButton,
  buttonVariant,
  buttonSize,

  space,
  color,
  width,
  fontSize,
  height,
  css
)

Button.displayName = 'Button'

Button.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...height.propTypes,
  ...css.propTypes,
  ...injectDisplay({
    ...buttonVariant.propTypes,
    ...buttonSize.propTypes,
    ...themedButton.propTypes
  }, Button)
}

Button.defaultProps = {
  variant: 'default',
  btnSize: 'default'
}

export default Button