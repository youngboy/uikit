import React from 'react'
import tags from 'html-tags'
import { styles } from 'styled-system'

const allPropTypes = Object.keys(styles)
  .filter(key => typeof styles[key] === 'function')
  .reduce((a, key) => Object.assign(a, styles[key].propTypes), {})

const styledBlackList = [ ...Object.keys(allPropTypes), 'theme', 'css']

export const omit = (obj, keys) => {
  const next = {}
  for (let key in obj) {
    if (keys.indexOf(key) > -1) continue
    next[key] = obj[key]
  }
  return next
}

const Tag = React.forwardRef(({
  is: Tag = 'div',
  blacklist = [],
  ...props
}, ref) => React.createElement(Tag, {
  ref,
  ...omit(props, [
    ...styledBlackList,
    ...blacklist
  ])
}))

Tag.displayName = 'Clean.div'

tags.forEach(tag => {
  Tag[tag] = props => React.createElement(Tag, { is: tag, ...props })
  Tag[tag].displayName = 'Clean.' + tag
})

export const cleanTag = (Cmp) => {
  return (props) => (
    <Cmp {...omit(props, styledBlackList)} />
  )
}

export default Tag