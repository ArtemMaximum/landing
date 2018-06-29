import React from 'react'
import PropTypes from 'prop-types'

import { Field } from '../molecules'

export const ReduxField = ({ meta, input, ...props }) => {
  return (
    <Field {...{ ...props, ...input, invalid: meta.touched && !!meta.error, error: meta.error }} />
  )
}

ReduxField.propTypes = {
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string
  }).isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}
