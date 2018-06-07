import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './index.css'
import SocialIcons from '../SocialIcons/index'
import { NAV_LINKS } from '../../consts/urls'
import Search from '../Search'
import FontIcon from '@fortawesome/react-fontawesome'
import faCog from '@fortawesome/fontawesome-free-solid/faCog'
class HeaderLinks extends Component {
    state = {
      open: false
    }

    onOpen = () => this.setState({ open: !this.state.open })
    render () {
      const { state: { open }, props: { location: { pathname } } } = this
      return (
        <Fragment>
          <div className="HeaderLinks">
            <div className="BarsMenu">
              <button className="nav-toggle" data-open={open} onClick={this.onOpen}>
                <span className="bar-top" />
                <span className="bar-mid" />
                <span className="bar-bot" />
              </button>
            </div>

            <div className="container">
              {NAV_LINKS.map(({ name, url }, key) => (
                <Link
                  to={url}
                  key={key}
                  data-active={pathname === url}
                >
                  {name}
                </Link>
              ))}
              <Search />
            </div>
          </div>

          <div className="MobileMenu" data-open={open}>
            <div className="logo">
              <FontIcon icon={faCog} size="3x" className="icon-logo"/>
              <h1>13 <span>SCHRON</span></h1>
            </div>
            <hr />
            {NAV_LINKS.map(({ name, url, icon }, key) => (
              <Link
                to={url}
                key={key}
                data-active={pathname === url}
              >
                <FontIcon icon={icon}/>
                {name}
              </Link>
            ))}
            <hr/>
            <Search />
            <hr/>
            <SocialIcons />
          </div>
        </Fragment>

      )
    }
}

export default withRouter(HeaderLinks)
