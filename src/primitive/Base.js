import styled from 'styled-components'
import { styles } from 'styled-system'

import { css, cleanTag } from '../utils'


const Base = styled(cleanTag('div'))(
  css
)

// FIXME: Not used for now, it is slower than base
// import Tag from './Tag'
// const BaseForwardRef = styled(Tag.div)(
//   css
// )

export const AllStyle = styled(Base)(
  ...Object.keys(styles).map(s => styles[s])
)

Base.propTypes = {
  ...css.propsTypes
}

Base.displayName = 'Base'

export default Base

