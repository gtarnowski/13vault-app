import React, {Component} from 'react'
import searchResults from '../../queries/searchResults'
import './index.css'
import { graphql } from 'react-apollo'
import Paginator from '../Paginator'

class SearchResults extends Component {
  render () {
    const { onPageChange, data: { loading, searchResults } } = this.props

    if (loading) return 'loading'
    const { results, pagination } = searchResults

    return (
      <div className="SearchResults">
        {results.map(({ _id, title, content, img }) => (
          <div className="result-row" key={_id}>
            <span>{title}</span>
            <div className="content">
              {content}
            </div>
            <hr/>
          </div>
        ))}

        <Paginator {...pagination} onPageChange={onPageChange}/>
      </div>
    )
  }
}

export default graphql(searchResults)(SearchResults)
