import styled from 'styled-components'

import { themed, variant } from '../utils'
import { Box } from '../primitive'


const buttonVariant = variant({
  prop: 'variant',
  key: 'button.variant'
})

const buttonSize = variant({
  prop: 'btnSize',
  key: 'button.size'
})


const Button = styled(Box)(
  themed('button.base'),
  buttonSize,
  buttonVariant
)

Button.defaultProps = {
  as: 'button',
  variant: 'default',
  size: 'default'
}

export default Button