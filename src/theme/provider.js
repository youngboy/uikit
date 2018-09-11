import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Preset } from '../components'

/**
 * Wrap theme provider so that its children have different stylings
 *
 * @param  {} theme object that should inherit from ./theme.js
 * @param  bool withPreset=True whether to include preset inheriting css
 *            normally it should be include only once
 */
export const withTheme = (theme, withPreset = true) => {
  let Wrapper = React.Fragment
  if (withPreset) {
    Wrapper = Preset
  }

  return class Layout extends React.Component {
    render() {
      return (
        <ThemeProvider theme={theme}>
          <Wrapper>
            {this.props.children}
          </Wrapper>
        </ThemeProvider>
      )
    }
  }
}

export default withTheme