import React from 'react'
import { css } from './View';
import { Box } from 'uikit'


const extraCss = (props) => {
  return `
  position: absolute;
  cursor: pointer;
  width: 0;
  height: 0;
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
  return <Box css={css+extraCss(props)}
                  ml={props.x + 'px'}
                  mt={props.y + 'px'}
                  {...props}
         />
}


export default Dot;
