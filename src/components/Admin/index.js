import React, { Fragment } from 'react'

// Components
import LeftSidebarMenu from '../LeftSidebarMenu'
import AdminHeader from '../AdminHeader'
import './index.css'

const Admin = ({ collapsed, onCollapse }) => (
  <Fragment>
    <AdminHeader />
    <LeftSidebarMenu
      onCollapse={onCollapse}
      collapsed={collapsed}
    />
  </Fragment>
)

export default Admin
