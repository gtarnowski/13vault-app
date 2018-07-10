import React, {Component} from 'react'
import { Link } from 'react-router-dom'

// Components
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBell from '@fortawesome/fontawesome-free-solid/faBell'
import './index.css'

class NotificationsBell extends Component {
  state = {
    open: false
  }

  node = null
  openButtonNode = null

  componentDidMount () {
    this.setState({ width: this.openButtonNode.clientWidth })
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
      if (this.openButtonNode.contains(target) && this.state.open) {
        this.setState({ open: false })
      } else {
        this.setState({ open: true })
      }
    } else {
      this.setState({ open: false })
    }
  }

  render () {
    const notifications = 2
    return (
      <div className="NotificationsBell" ref={ref => { this.node = ref }}>
        <div className="hover">
          <div ref={ref => { this.openButtonNode = ref }}>
            <FontAwesomeIcon icon={faBell} className="icon" />
            {notifications && (
              <span className="notifications-label"/>
            )}
          </div>

          <div className="drop-down" data-open={this.state.open}>
            <div className="dd-wrapper">
              <Link to={``}>Item</Link>
              <Link to={``}>Item</Link>
              <Link to={``}>Item</Link>
              <Link to={``}>Item</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NotificationsBell
