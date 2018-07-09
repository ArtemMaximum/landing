import React from 'react'
import PropTypes from 'prop-types'
import { ContentTemplate } from '../../../ui/templates'
import { Brand, NavLink } from '../../../ui/atoms'
import { NavbarNav } from '../../../ui/molecules'

const NAV_ITEMS = [
  {
    title: 'Home',
    link: '/home',
  },
  {
    title: 'Classes',
    link: '/classes',
  },
  {
    title: 'Schedule',
    link: '/schedule',
  },
  {
    title: 'Prices',
    link: '/prices',
  },
  {
    title: 'Events',
    link: '/events',
  },
  {
    title: 'Contacts',
    link: '/contacts',
  },
  {
    title: 'Address',
    link: '/address',
  },
]

const DemoPage = ({ /* onClick, */ message }) =>
  <ContentTemplate>
    <h1>DemoPage: {message}</h1>
    <div>
      <Brand href={'#'} title={'Prof-Olimp'}/>
    </div>
    <div>
      <NavLink to={'/home'}>Home</NavLink>
    </div>
    <div>
      <NavbarNav items={NAV_ITEMS} />
    </div>
  </ContentTemplate>

DemoPage.propTypes = {
  message: PropTypes.string.isRequired,
}

export default DemoPage