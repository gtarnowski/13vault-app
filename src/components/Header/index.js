import React, {Component} from 'react'

import HeaderTopBar from '../HeaderTopBar'
import HeaderLinks from '../HeaderLinks'
import './index.css'

class Header extends Component {
  render () {
    return (
      <nav className="Header">
        <HeaderTopBar />
        <HeaderLinks />
      </nav>
    )
  }
}

export default Header
