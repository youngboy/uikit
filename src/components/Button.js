import styled from 'styled-components'

import { themed, variant, injectDisplay } from '../utils'
import { Box } from '../primitive'


const buttonVariant = variant({
  prop: 'variant',
  key: 'button.variant'
})

const buttonSize = variant({
  prop: 'btnSize',
  key: 'button.size'
})

const themedButton = themed('button.base')

const Button = styled(Box)(
  themedButton,
  buttonVariant,
  buttonSize
)

Button.displayName = 'Button'

Button.propTypes = {
  ...Box.propTypes,
  ...injectDisplay({
    ...buttonVariant.propTypes,
    ...buttonSize.propTypes,
    ...themedButton.propTypes
  }, Button)
}

Button.defaultProps = {
  as: 'button',
  variant: 'default',
  btnSize: 'default'
}

export default Button