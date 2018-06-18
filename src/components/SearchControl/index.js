import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { URLS } from '../../consts/urls'
import { AutoCompleteWithQuery } from '../SearchAutoComplete'
import FontIcon from '@fortawesome/react-fontawesome'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'
import './index.css'
import ToggleMenu from '../ToggleMenu'
import clone from 'lodash/clone'

class SearchControl extends Component {
  state = {
    value: ''
  }

  onChange = ({ target: { value } }) => this.setState({ value })

  onClearSearch = () => this.setState({ value: '' })

  onKeyPress = ({ target: { value }, which }) => {
    if (which === 13) {
      this.onClearSearch()
      this.props.history.push('/search/' + value)
    }
  }

  onOverrideOpen = () => {
    const { open, onOpen } = this.props
    if (open) {
      this.onClearSearch()
      onOpen()
    }
  }

  render () {
    const { value } = this.state
    const { open } = this.props
    return (
      <Fragment>
        <div className="SearchControl" >
          <span className="icon">
            <FontIcon icon={faSearch} />
          </span>
          <input
            type="text"
            placeholder="Szukaj"
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
            value={value}
          />
          {value.length > 4 && (
            <AutoCompleteWithQuery
              regex={value}
              onClearSearch={this.onClearSearch}
            />
          )}
          <ToggleMenu open={open} onOpen={this.onOverrideOpen}/>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(SearchControl)
