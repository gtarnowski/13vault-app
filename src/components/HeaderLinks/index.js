import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './index.css'
import SocialIcons from '../SocialIcons/index'
import ToggleMenu from '../ToggleMenu'
import { NAV_LINKS, URLS } from '../../consts/urls'
import SearchControl from '../SearchControl'
import FontIcon from '@fortawesome/react-fontawesome'
import faCog from '@fortawesome/fontawesome-free-solid/faCog'
class HeaderLinks extends Component {
  state = {
    open: false
  }
  node = null
  closeButtonNode = null

  onBackdropClick = ({ target }) => {
    if (this.closeButtonNode.contains(target)) return

    if (this.node.contains(target)) {
      this.setState({ open: true })
    } else {
      this.setState({ open: false })
      window.removeEventListener('click', this.onBackdropClick, false)
    }
  }

  onOpen = () => {
    console.log('here')
    if (this.state.open) {
      this.setState({ open: false })
    } else {
      this.setState({ open: true })
      window.addEventListener('click', this.onBackdropClick, false)
    }
  }

  render () {
    const { state: { open }, props: { location: { pathname } } } = this
    return (
      <Fragment>
        <div className="HeaderLinks">
          <div className="BarsMenu" ref={r => { this.closeButtonNode = r }}>
            <ToggleMenu open={open} onOpen={this.onOpen}/>
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
            <SearchControl onOpen={this.onOpen} />
          </div>
        </div>

        <div className="MobileMenu" data-open={open} ref={r => { this.node = r }}>
          <Link className="logo" to={URLS.HOME}>
            <FontIcon icon={faCog} size="2x" className="icon-logo"/>
            <h1>13 <span>SCHRON</span></h1>
          </Link>
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
          <SocialIcons />
        </div>
      </Fragment>

    )
  }
}

export default withRouter(HeaderLinks)
