import React, { Component } from 'react'
import FontIcon from '@fortawesome/react-fontawesome'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'
import './index.css'
class Search extends Component {
  render () {
    return (
      <div className="Search">
        <span className="icon">
          <FontIcon icon={faSearch} />
        </span>
        <input type="text" placeholder="Szukaj"/>
      </div>
    )
  }
}

export default Search
