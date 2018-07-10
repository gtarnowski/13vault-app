import React from 'react'
import { withRouter } from 'react-router-dom'
import { URLS } from '../../consts/urls'

import SearchControlMobile from '../SearchControlMobile'
import HeaderTopBar from '../HeaderTopBar'
import HeaderLinks from '../HeaderLinks'
import './index.css'

const Header = ({ location: { pathname } }) => {
  if (pathname.match(URLS.ADMIN) || pathname.match(URLS.SIGN_IN)) return <div />

  return (
    <nav className="Header">
      <HeaderTopBar />
      <SearchControlMobile />
      <HeaderLinks />
    </nav>
  )
}

export default withRouter(Header)
