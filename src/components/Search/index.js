import React, {Component} from 'react'
import './index.css'
import SearchResults from '../SearchResults'

class Search extends Component {
  render () {
    console.log('props', this.props)
    return (
      <div>
        <SearchResults regex={this.props.match.params.query}/>
      </div>
    )
  }
}

export default Search
