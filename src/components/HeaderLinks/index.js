import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'
import './index.css'
import SocialIcons from '../SocialIcons/index'
import ToggleMenu from '../ToggleMenu'
import { NAV_LINKS, URLS } from '../../consts/urls'
import SearchControl from '../SearchControl'
import FontIcon from '@fortawesome/react-fontawesome'
import faCog from '@fortawesome/fontawesome-free-solid/faCog'

class HeaderLinks extends Component {
  state = {
    open: false,
    activeChildren: {}
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

  onSetActiveChildren = activeChildren => this.setState({ activeChildren })

  render () {
    const { state: { open, activeChildren }, props: { location: { pathname } } } = this
    return (
      <Fragment>
        <div className="HeaderLinks">
          <div className="BarsMenu" ref={r => { this.closeButtonNode = r }}>
            <ToggleMenu open={open} onOpen={this.onOpen}/>
          </div>

          <div className="container">
            {NAV_LINKS.map(({ name, url, children, defaultChildren }, key) => defaultChildren ? (
              <div
                key={key}
                className="main-link"
                data-active={pathname === url}
                onMouseEnter={() => this.onSetActiveChildren(defaultChildren)}
              >
                {name}
                {children && !isEmpty(activeChildren) && (
                  <div className="SecondaryLevelMenu" onClick={e => e.stopPropagation()}>
                    <div className="LeftPanel">
                      {children.map((level, key) => (
                        <div className="menu-item" key={key} data-active={level.url === activeChildren.url}>
                          <a
                            onClick={e => e.preventDefault()}
                            onMouseEnter={() => this.onSetActiveChildren(level)}
                          >
                            {level.name}
                          </a>
                        </div>
                      ))}
                    </div>
                    {activeChildren && (
                      <div className="RightPanel">
                        <h2>{activeChildren.name}</h2>
                        {activeChildren.children.map(({ name, url: childrenUrl }, key) => (
                          <div className="menu-item" key={key}>
                            <a href={url + childrenUrl}>{name}</a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <Link
                to={url}
                key={key}
                className="main-link"
                data-active={pathname === url}
              >
                {name}
              </Link>
            )
            )}
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
