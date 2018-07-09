import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { NavLink } from '../atoms'
import { width, mediaMinWidth } from '../../lib/sizes'

const NavContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-bottom: 0;
  list-style: none;
  
  ${mediaMinWidth(width.tablet)} {
    flex-direction: row;
  }
`

// TODO: Компонент не завершен, заняться им в самом конце
export const NavbarNav = ({ items, ...props }) => {
  return (
    <NavContainer>
      {items.map((item, index) =>
        <li key={`nav-${index}`}>
          <NavLink to={item.link}>{item.title}</NavLink>
        </li>
      )}
    </NavContainer>
  )
}

NavbarNav.propTypes = {
  items: PropTypes.array.isRequired,
}

NavbarNav.defaultProps = {}