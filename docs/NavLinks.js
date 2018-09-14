import React from 'react'
import PropTypes from 'prop-types'
// Copy from http://jxnblk.com/mdx-go/
// with styling changed
import sortby from 'lodash.sortby'
import { NavLink as Link } from 'react-router-dom'
import isAbsolute from 'is-absolute-url'
import { Link as StyledLink } from '../src'


const sort = (routes, order) => sortby(routes, route => {
  const index = order.indexOf(route.name)
  return index < 0 ? Infinity : index
})

export const NavLink = ({ href, ...props}) => isAbsolute(href)
    ? <a {...props} href={href} />
    : <StyledLink variant='nav' as={Link} {...props} to={href} />

export const NavLinks = ({
  routes = [],
  order = [],
  filter,
  staticContext,
  ...props
}) =>
  <React.Fragment>
    {sort(routes, order)
      .filter(filter)
      .map(route => (
        <NavLink
          key={route.key}
          {...props}
          css={'display: block;'}
          href={route.path}
          exact={route.exact}
          children={route.name}
        />
    ))}
  </React.Fragment>

NavLinks.propTypes = {
  routes: PropTypes.array.isRequired,
  order: PropTypes.array.isRequired,
  filter: PropTypes.func.isRequired,
}

NavLinks.defaultProps = {
  order: [ 'index' ],
  filter: () => true,
}

export default NavLinks