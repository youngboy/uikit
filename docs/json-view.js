// Lazy load react-json-view, prevent ssr got window undefined
// https://github.com/mac-s-g/react-json-view/issues/121#issuecomment-352346007
import React from 'react'

let ReactJson = null

export default class JsonEditor extends React.Component{
  state = {
    loaded: false
  }

  componentDidMount() {
     require.ensure(
       ['react-json-view'],
       () => {
         try {
          ReactJson = require('react-json-view').default
          this.setState({ loaded: true })
        } catch(err) { console.log('react-json-view:', err) }
      })
  }
  render () {
    if (ReactJson == null) {
      return "Loading..."
    }
    return <ReactJson {...this.props} />
  }
}