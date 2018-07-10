import React, {Component, Fragment} from 'react'
import { URLS } from '../../consts/urls'
import { Link, withRouter } from 'react-router-dom'

// Components
import VaultTextLogo from '../VaultTextLogo'
import ToggleMenu from '../ToggleMenu'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faDesktop from '@fortawesome/fontawesome-free-solid/faDesktop'
import faComments from '@fortawesome/fontawesome-free-solid/faComments'
import faAlignLeft from '@fortawesome/fontawesome-free-solid/faAlignLeft'
import faFolderOpen from '@fortawesome/fontawesome-free-solid/faFolderOpen'
import faDatabase from '@fortawesome/fontawesome-free-solid/faDatabase'
import faCog from '@fortawesome/fontawesome-free-solid/faCog'
import './index.css'

class LeftSidebarMenu extends Component {
  menuItems = [
    { name: 'Dashboard', url: URLS.ADMIN_DASHBOARD, icon: faDesktop },
    { name: 'News', url: URLS.ADMIN_NEWS, icon: faComments },
    { name: 'Artykuł', url: URLS.ADMIN_ARTICLES, icon: faAlignLeft },
    { name: 'Moje Wpisy', url: URLS.ADMIN_MY, icon: faFolderOpen },
    { name: 'Forum', url: URLS.ADMIN_FORUM, icon: faDatabase }
  ]

  render () {
    const { location: { pathname }, collapsed, onCollapse } = this.props
    return (
      <nav className="LeftSidebarMenu" data-collapsed={collapsed}>
        <header>
          <div className="logo" onClick={onCollapse}>
            <VaultTextLogo short/>
          </div>
          <div className="menu-button">
            {!collapsed && (
              <ToggleMenu
                onOpen={onCollapse}
                dark
              />
            )}
          </div>
        </header>
        <section className="content">
          <ul className="menu">
            {this.menuItems.map(({ name, url, icon }, key) => (
              <Link
                key={key}
                to={url}
                className="menu-item"
                data-active={url === pathname}
              >
                {collapsed
                  ? (
                    <FontAwesomeIcon icon={icon} className="icon" />
                  ) : (
                    <Fragment>
                      <FontAwesomeIcon icon={icon} className="icon" /> {name}
                    </Fragment>
                  )}
              </Link>
            ))}
          </ul>
        </section>
        <FontAwesomeIcon icon={faCog} className="background-icon"/>
      </nav>
    )
  }
}

export default withRouter(LeftSidebarMenu)
