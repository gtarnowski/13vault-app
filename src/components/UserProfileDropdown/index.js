import React from 'react'
import { withRouter } from 'react-router-dom'
import { URLS } from '../../consts/urls'

// Components
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSignOutAlt from '@fortawesome/fontawesome-free-solid/faSignOutAlt'
import './index.css'

const UserProfileDropdown = ({ history, initials, fullName }) => {
  const logOut = () => {
    history.push(URLS.SIGN_IN)
    window.localStorage.setItem('token', null)
    window.apollo.resetStore()
  }

  return (
    <div className="UserProfileDropdown">
      <div className="header">
        <div className="avatar">
          <span className="round-avatar">{initials}</span>
        </div>
        <div className="details">
          <strong>{fullName}</strong>
          <p>Admin</p>
        </div>
      </div>
      <ul className="options">
        <li onClick={logOut}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Wyloguj
        </li>
      </ul>
    </div>
  )
}

export default withRouter(UserProfileDropdown)
