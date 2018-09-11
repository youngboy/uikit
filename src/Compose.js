import React from 'react'
import styled from 'styled-components'

import Box from './Box'

const Compose = ({ as = Box, from, ...props }) => {
  let As
  if (from) {
    As = styled(as)( ...from )
  } else {
    As = as
  }
  return <As {...props} />
}


export default Compose
