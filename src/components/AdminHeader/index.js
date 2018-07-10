import React, {Component} from 'react'

// Components
import UserProfileHeader from '../UserProfileHeader'
import NotificationsBell from '../NotificationsBell'
import './index.css'

class AdminHeader extends Component {
  render () {
    return (
      <nav className="AdminHeader">
        <div className="wrapper">
          <aside>
            <NotificationsBell />
          </aside>
          <header>
            <UserProfileHeader />
          </header>
        </div>
      </nav>
    )
  }
}

export default AdminHeader
