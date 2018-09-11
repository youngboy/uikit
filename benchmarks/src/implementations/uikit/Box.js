import React from 'react'
import { css } from './View';
import { Flex } from 'uikit'

const getColor = color => {
  switch (color) {
    case 0:
      return '#14171A';
    case 1:
      return '#AAB8C2';
    case 2:
      return '#E6ECF0';
    case 3:
      return '#FFAD1F';
    case 4:
      return '#F45D22';
    case 5:
      return '#E0245E';
    default:
      return 'transparent';
  }
};

const Box = (props) => {
  let extra = {}
  if (props.fixed) {
    extra.height = '6px'
    extra.width = '6px'
  }
  return <Flex
    css={css + 'align-self: flex-start;'}
    bg={getColor(props.color)}
    flexDirection={props.layout === 'column' ? 'column' : 'row'}
    p={props.outer ? '4px' : '0'}
    {...extra}
    {...props}
  />
}
export default Box;
