import React, {Component} from 'react'

import SearchControlMobile from '../SearchControlMobile'
import HeaderTopBar from '../HeaderTopBar'
import HeaderLinks from '../HeaderLinks'
import './index.css'
class Header extends Component {
  render () {
    return (
      <nav className="Header">
        <HeaderTopBar />
        <SearchControlMobile />
        <HeaderLinks />
      </nav>
    )
  }
}

export default Header
