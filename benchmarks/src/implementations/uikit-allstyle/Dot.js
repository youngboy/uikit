import React from 'react'
import { AllStyle } from 'uikit'


const css = (props) => {
  return `
  box-sizing: border-box;
  cursor: pointer;
  border-width: 0;
  border-color: transparent;
  border-style: solid;
  border-top-width: 0;
  transform: translate(50%, 50%);
  border-right-width: ${props.size / 2 + 'px'};
  border-bottom-width: ${props.size / 2 + 'px'};
  border-left-width: ${props.size / 2 + 'px'};
  border-bottom-color: ${props.color};
  `
}

const Dot = (props) => {
  return <AllStyle css={css(props)}
                   alignItems='stretch'
                   display='flex'
                   flexBasis='auto'
                   flexDirection='column'
                   flexShrink='0'
                   m='0'
                   p='0'
                   minHeight='0'
                   minWidth='0'
                   position='absolute'
                   width='0'
                   height='0'
                   ml={props.x + 'px'}
                   mt={props.y + 'px'}
                   {...props}
         />
}


export default Dot;
