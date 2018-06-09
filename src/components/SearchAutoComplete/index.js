import React, {Component} from 'react'

// Components
import { Link } from 'react-router-dom'
import './index.css'

class SearchAutoComplete extends Component {
  render () {
    const { results = [] } = this.props
    if (results.length === 0) return null

    return (
      <div className="SearchAutoComplete">
        <ul>
          {results && results.map((result, key) => (
            <Link key={key} to={``}>
              <li>
                Search Result Value
              </li>
            </Link>
          ))}
        </ul>
      </div>
    )
  }
}
export default SearchAutoComplete
