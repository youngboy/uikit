import styled from 'styled-components'

import { cleanTag, themed, variant, injectDisplay } from '../utils'

const presetVariant =  variant({
  prop: 'variant',
  key: 'preset.variant'
})

const themedPreset = themed('preset.base')

// TODO: remove preset
// - inherit css rules can be used by global component
// wait untill Global component fully tested

/**
 * Preset designed for higher level component that
 * 1. define css that can pass down to children, like: fontSize.
 *    In theming, it defines root theming default attrs
 * 2. sepecify descendant's css props by tag, useful for simple markdown stylings.
 *     Or other cases that can't dynamic map react component to generated html tag
 */
const Preset = styled(cleanTag('div'))(
  themedPreset,
  presetVariant
)

Preset.displayName = 'Preset'

Preset.propTypes = {
  ...injectDisplay({
    ...themedPreset.propTypes,
    ...presetVariant.propTypes,
  }, Preset)
}

Preset.defaultProps = {
  variant: 'default'
}

export default Preset