import React from 'react'
import PropTypes from 'prop-types'
// Copy from http://jxnblk.com/mdx-go/
// with styling changed
import styled from 'styled-components'
import sortby from 'lodash.sortby'
import { NavLink as Link } from 'react-router-dom'
import isAbsolute from 'is-absolute-url'
import { Link as StyledLink } from '../src'


const sort = (routes, order) => sortby(routes, route => {
  const index = order.indexOf(route.name)
  return index < 0 ? Infinity : index
})

const StyledNavLink = styled(StyledLink)`
  display: block;
  width: 100%;
  text-decoration: none;
  color: inherit;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  &.active {
    color: ${(props) => props.theme.colors.blue || 'blue'};
  }
`

export const NavLink = ({ to, ...props}) => {
  let Tag = Link
  const extraProps = {}
  if (isAbsolute(to)) {
    Tag = 'a'
    extraProps.href = to
    extraProps.target = '_blank'
  } else {
    extraProps.to = to
  }
  Tag === 'a'
  return <StyledNavLink
          as={Tag}
          {...props}
          {...extraProps}
         />
}

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
          to={route.path}
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