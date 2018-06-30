import React from 'react'
import PropTypes from 'prop-types'

const DemoPage = ({ /* onClick, */ message }) =>
  <div>
    <h1>DemoPage: {message}</h1>
  </div>

DemoPage.propTypes = {
  message: PropTypes.string.isRequired,
}

export default DemoPage