import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const ContentTemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${props => props.theme.pixels.contentWidth}px;
  padding: 0 15px;
  z-index: 1;
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
