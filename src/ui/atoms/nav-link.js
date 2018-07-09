import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { width, mediaMinWidth } from '../../lib/sizes'

import { Link } from 'react-router-dom'

const NavLinkAtom = styled(Link)`
  display: block;
  font-size: 15px;
  color: ${({ isActive, theme }) => {
    return isActive ? theme.colors.actionColor : '#fff'
  }};
  line-height: 50px;
  padding: 0 20px;
  text-transform: uppercase;
  text-shadow: 1px 1px #000000;

  ${mediaMinWidth(width.tablet)}{
    line-height: 40px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.actionColor};
  }
`

export const NavLink = ({ children, ...props }) =>
  <NavLinkAtom {...props}>{children}</NavLinkAtom>

NavLink.propTypes = {
  children: PropTypes.any.isRequired,
}