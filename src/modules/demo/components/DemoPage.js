import React, { PropTypes } from 'react'

const DemoPage = ({ onClick, message }) => {
  return (
    <div>
      <h1>DemoPage: {message}</h1>
    </div>
  )
}

DemoPage.propTypes = {
  message: PropTypes.string.isRequired
}

export default DemoPage