import React, {Component} from 'react'
import './index.css'
import SearchResults from '../SearchResults'

class Search extends Component {
  state = {
    page: 1
  }

  onPageChange = page => {
    this.setState({page})
  }

  render () {
    return (
      <div className="SearchResults">
        <SearchResults
          page={this.state.page}
          regex={this.props.match.params.query}
          onPageChange={this.onPageChange}
        />
      </div>
    )
  }
}

export default Search
