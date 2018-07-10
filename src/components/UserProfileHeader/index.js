import React, { Component } from 'react'
import user from '../../queries/user'
import { graphql } from 'react-apollo'

// Components
import SpinnerSmall from '../Spinners/SpinnerSmall'
import UserProfileDropdown from '../UserProfileDropdown'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faChevronDown from '@fortawesome/fontawesome-free-solid/faChevronDown'
import './index.css'

class UserProfileHeader extends Component {
  state = {
    open: false
  }

  node = null

  componentDidMount () {
    window.addEventListener('click', this.onBackdropClick, false)
  }
  componentWillUnmount () {
    window.removeEventListener('click', this.onBackdropClick, false)
  }

  onBackdropClick = ({ target }) => {
    if (!this.node) {
      return
    }

    if (this.node.contains(target)) {
      this.setState({ open: true })
    } else {
      this.setState({ open: false })
    }
  }

  render () {
    const { loading, user } = this.props.data

    const src = null
    return (
      <div className="UserProfileHeader" ref={ref => { this.node = ref }}>
        <div className="avatar">
          {loading && user ? <SpinnerSmall /> : src ? (
            <img src={src} alt=""/>
          ) : (
            <span className="round-avatar small">{user && user.initials}</span>
          )}
        </div>
        <div className="user-name">
          <span>{loading ? 'Loading' : user.fullName}</span>
        </div>
        <div className="chevron">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>

        {!loading && user && (
          <div className="drop-down" data-open={this.state.open}>
            <UserProfileDropdown {...user} />
          </div>
        )}
      </div>
    )
  }
}

export default graphql(user)(UserProfileHeader)
