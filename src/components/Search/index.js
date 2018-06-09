import React, { Component, Fragment } from 'react'
import SearchAutoComplete from '../SearchAutoComplete'
import FontIcon from '@fortawesome/react-fontawesome'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'
import './index.css'
import times from 'lodash/times'
class Search extends Component {
  state = {
    value: ''
  }

  onChange = ({ target: { value } }) => this.setState({ value })
  onKeyPress = ({ target: { value }, which }) => {
    if (which === 13) {
      console.log(true)
    }
  }
  render () {
    const results = times(8, String) || []
    const { value } = this.state
    return (
      <Fragment>
        <div className="Search">
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

export default Search
