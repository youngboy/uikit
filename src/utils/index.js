import PropTypes from 'prop-types'
import Tag, { cleanTag } from './Tag'

export { Tag, cleanTag }


const get = (obj, ...paths) => paths
  .join('.')
  .split('.')
  .reduce((a, b) => (a && a[b]) ? a[b] : null, obj)

const numberOrStringProp = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
])

export const themed = key => props =>
  get(props.theme, key, props[key]) || null


export const variant = ({
  key,
  prop = 'variant'
}) => {
  const fn = (props) =>
    get(props.theme, key, props[prop]) || null
  fn.propTypes = {
    [prop]: numberOrStringProp
  }
  return fn
}