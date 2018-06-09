import React, { Component, Fragment } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import SearchAutoComplete from '../SearchAutoComplete'
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
    const results = times(8, String) || []
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
          {value.length > 4 && results.length > 0 && (
            <SearchAutoComplete results={results}/>
          )}

        </div>
      </Fragment>
    )
  }
}

export default withRouter(SearchControl)
