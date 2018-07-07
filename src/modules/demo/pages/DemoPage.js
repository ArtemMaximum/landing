import React from 'react'
import PropTypes from 'prop-types'
import { ContentTemplate } from '../../../ui/templates'
import { Brand } from '../../../ui/atoms'

const DemoPage = ({ /* onClick, */ message }) =>
  <ContentTemplate>
    <h1>DemoPage: {message}</h1>
    <div>
      <Brand href={'#'} title={'Prof-Olimp'}/>
    </div>
  </ContentTemplate>

DemoPage.propTypes = {
  message: PropTypes.string.isRequired,
}

export default DemoPage