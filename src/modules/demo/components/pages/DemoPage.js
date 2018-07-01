import React from 'react'
import PropTypes from 'prop-types'
import { ContentTemplate } from '../../../../ui/templates'

const DemoPage = ({ /* onClick, */ message }) =>
  <ContentTemplate>
    <h1>DemoPage: {message}</h1>
  </ContentTemplate>

DemoPage.propTypes = {
  message: PropTypes.string.isRequired,
}

export default DemoPage