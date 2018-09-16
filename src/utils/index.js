import PropTypes from 'prop-types'
import Tag, { cleanTag } from './Tag'

export { Tag, cleanTag }


export const get = (obj, ...paths) => paths
  .join('.')
  .split('.')
  .reduce((a, b) => (a && a[b]) ? a[b] : null, obj)

const numberOrStringProp = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
])

export const cloneType = (fn, meta) => {
  const cloned = (...args) => fn(...args)
  cloned.meta = meta
  return cloned
}

export const injectDisplay = (props, cmp) => {
  return Object.keys(props).reduce((prev, key) => {
    prev[key] = cloneType(props[key], {
      ...props[key].meta,
      displayName: cmp.displayName
    })
    return prev
  }, {})
}

export const themed = key => {
  const fn = props => get(props.theme, key) || null
  fn.propTypes = {
    theme: cloneType(PropTypes.object, {
      prop: 'theme',
      themeKey: key,
    })
  }
  return fn
}

export const css = props => props.css
css.propsTypes = {
  css: cloneType(PropTypes.string, {
    prop: 'css',
    displayName: 'Base',
    themeKey: null,
  })
}


export const variant = ({
  key,
  prop = 'variant'
}) => {
  const fn = (props) =>
    get(props.theme, key, props[prop]) || null
  fn.propTypes = {
    [prop]: cloneType(numberOrStringProp, {
      prop,
      themeKey: key,
    })
  }
  return fn
}
