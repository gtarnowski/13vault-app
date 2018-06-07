import React from 'react'

import SocialIcons from '../SocialIcons/index'
import FontIcon from '@fortawesome/react-fontawesome'
import faCog from '@fortawesome/fontawesome-free-solid/faCog'
import './index.css'

const HeaderTopBar = () => {
  return (
    <div className="HeaderTopBar">
      <div className="container">
        <FontIcon icon={faCog} size="3x" className="icon-logo"/>
        <h1>13 <span>SCHRON</span></h1>
        <SocialIcons />
      </div>
    </div>
  )
}

export default HeaderTopBar
