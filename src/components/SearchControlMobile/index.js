import React, {Component} from 'react'

// Components
import SearchControl from '../SearchControl'
import SnackBar from '../SnackBar'
import FontIcon from '@fortawesome/react-fontawesome'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'
import './index.css'

class SearchControlMobile extends Component {
  state = {
    open: false
  }

  onOpen = () => this.setState({ open: !this.state.open })
  render () {
    const { open } = this.state
    return (
      <div className="SearchControlMobile">
        <span onClick={this.onOpen} className="open-icon">
          <FontIcon icon={faSearch} />
        </span>

        <SnackBar open={open}>
          <SearchControl open={open} onOpen={this.onOpen}/>

        </SnackBar>
      </div>
    )
  }
}

export default SearchControlMobile
