import React, { Component, Fragment } from 'react'
import { Switch } from 'react-router-dom'
import { URLS } from '../consts/urls'

import AdminNews from './AdminNews'
import Admin from './Admin'
import PrivateRoute from './PrivateRoute'
import './Admin/index.css'

class AdminPages extends Component {
  state = {
    collapsed: false
  }

  onCollapse = () => this.setState({ collapsed: !this.state.collapsed })

  render () {
    const { collapsed } = this.state
    return (
      <Fragment>
        <Admin
          onCollapse={this.onCollapse}
          collapsed={collapsed}
        />
        <div className="AdminContent" data-collapsed={collapsed}>
          <Switch>
            <PrivateRoute exact path={URLS.ADMIN_NEWS} component={AdminNews} />
          </Switch>
        </div>
      </Fragment>
    )
  }
}

export default AdminPages
