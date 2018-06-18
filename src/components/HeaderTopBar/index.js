import React from 'react'
import { Link } from 'react-router-dom'
import { URLS } from '../../consts/urls'
import SocialIcons from '../SocialIcons/index'
import FontIcon from '@fortawesome/react-fontawesome'
import faCog from '@fortawesome/fontawesome-free-solid/faCog'
import './index.css'

const HeaderTopBar = () => {
  return (
    <div className="HeaderTopBar">
      <Link className="container" to={URLS.HOME}>
        <FontIcon icon={faCog} size="3x" className="icon-logo"/>
        <h1>13 <span>SCHRON</span></h1>
        <SocialIcons />
      </Link>
    </div>
  )
}

export default HeaderTopBar
