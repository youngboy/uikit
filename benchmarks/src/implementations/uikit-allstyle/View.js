import React from 'react'
import { AllStyle } from 'uikit'

export const css = `
  border-width: 0;
  border-style: solid;
  box-sizing: border-box;
`;


const View = (props) => {
  return <AllStyle
           css={css}
           alignItems='stretch'
           display='flex'
           flexBasis='auto'
           flexDirection='column'
           flexShrink='0'
           m='0'
           p='0'
           position='relative'
           minHeight='0'
           minWidth='0'
           {...props}
         />
}

export default View;

