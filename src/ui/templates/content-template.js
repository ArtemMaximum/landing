import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { mediaMinWidth, width } from '../../lib/sizes'

const ContentTemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${props => props.theme.points.xs}px;
  padding: 0 15px;
  z-index: 1;

  ${mediaMinWidth(width.tablet)} {
    max-width: ${props => props.theme.points.sm}px;
  }

  ${mediaMinWidth((width.desktop + width.tabletS) / 2)} {
    max-width: ${props => props.theme.points.md}px;
  }

  ${mediaMinWidth((width.desktop + width.laptop) / 2)} {
    max-width: ${props => props.theme.points.lg}px;
  }
`

const ContentConstructor = ({ className, children }) => (
  <div className={className}>
    <ContentTemplateContainer>
      {children}
    </ContentTemplateContainer>
  </div>
)

export const ContentTemplate = styled(ContentConstructor)`
  display: flex;
  align-items: center;
  justify-content: center;
`

ContentConstructor.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

ContentConstructor.defaultProps = {
  className: '',
}
