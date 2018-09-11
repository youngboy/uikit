import React from 'react'
import { AllStyle } from 'uikit'

const css = `
  border-width: 0;
  border-style: solid;
  box-sizing: border-box;
`

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
  return <AllStyle
          css={css}
          alignItems='stretch'
          display='flex'
          flexBasis='auto'
          flexShrink='0'
          m='0'
          position='relative'
          minHeight='0'
          minWidth='0'
          alignSelf='flex-start'
          bg={getColor(props.color)}
          flexDirection={props.layout === 'column' ? 'column' : 'row'}
          p={props.outer ? '4px' : '0'}
          {...extra}
          {...props}
        />
}
export default Box;
