// Lazy load react-json-view, prevent ssr got window undefined
// https://github.com/mac-s-g/react-json-view/issues/121#issuecomment-352346007
import React from 'react'

let ReactJson = null

export default class JsonEditor extends React.Component{
  componentDidMount() {
     require.ensure(
       ['react-json-view'],
       function() {
         try {
          ReactJson = require('react-json-view').default
        } catch(err) { console.log('react-json-view:', err) }
      })
  }
  render () {
    if (ReactJson == null) {
      return "Unable to load content"
    }
    return <ReactJson {...this.props} />
  }
}