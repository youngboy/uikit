import styled from 'react-emotion'
import System from './System'

// type is a CMP
// - accept compose
// - to extend component
//
// create time
// rendering time
const create = new System({
  createComponent: type => (...args) =>
    styled(type, {
      shouldForwardProp: name => name !== 'theme'
    })(...args)
})

export default create
