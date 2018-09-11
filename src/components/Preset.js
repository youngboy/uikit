import styled from 'styled-components'
import { variant } from 'styled-system'

import { themed, cleanTag } from '../utils'

const presetVariant =  variant({
  prop: 'variant',
  key: 'preset'
})

/**
 * Preset designed for higher level component that
 * 1. define css that can pass down to children, like: fontSize.
 *    In theming, it defines root theming default attrs
 * 2. sepecify descendant's css props by tag, useful for simple markdown stylings.
 *     Or other cases that can't dynamic map react component to generated html tag
 */
const Preset = styled(cleanTag('div'))(
  themed('rootPreset'),
  presetVariant
)

Preset.defaultProps = {
  variant: 'default'
}

export default Preset