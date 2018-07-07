import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const BrandAtom = styled.a`
  font-family: 'Audiowide', sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  color: #fff;
  display: inline-block;
  margin-right: 1rem;
  line-height: inherit;
  white-space: nowrap;

  &:hover {
    color: ${({theme}) => theme.colors.actionColor};
  }
`

export const Brand = ({ href, title }) =>
  <BrandAtom href={href} >{title}</BrandAtom>

Brand.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}