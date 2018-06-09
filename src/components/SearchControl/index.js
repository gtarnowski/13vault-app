import React, { Component, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { AutoCompleteWithQuery } from '../SearchAutoComplete'
import FontIcon from '@fortawesome/react-fontawesome'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'
import './index.css'
import times from 'lodash/times'

class SearchControl extends Component {
  state = {
    value: ''
  }

  onChange = ({ target: { value } }) => this.setState({ value })
  onKeyPress = ({ target: { value }, which }) => {
    if (which === 13) {
      this.props.history.push({
        pathname: '/search',
        state: {
          value
        }
      })
    }
  }
  render () {
    const { value } = this.state
    return (
      <Fragment>
        <div className="SearchControl">
          <span className="icon">
            <FontIcon icon={faSearch} />
          </span>
          <input
            type="text"
            placeholder="Szukaj"
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
          />
          {value.length > 4 && (
            <AutoCompleteWithQuery regex={value}/>
          )}
        </div>
      </Fragment>
    )
  }
}

export default withRouter(SearchControl)
