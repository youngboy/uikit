import styled from 'styled-components'
import { styles } from 'styled-system'
import Tag, { cleanTag } from './Tag'

const css = props => props.css

const Base = styled(cleanTag('div'))(
  css
)

// Not used for now, slower than base
// const BaseForwardRef = styled(Tag.div)(
//   css
// )

export const AllStyle = styled(Base)(
  ...Object.keys(styles).map(s => styles[s])
)

export default Base

