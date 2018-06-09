import React, {Component} from 'react'
import autoComplete from '../../queries/autoComplete'
import SpinnerSmall from '../Loader/SpinnerSmall'
import { graphql } from 'react-apollo'
// Components
import { Link } from 'react-router-dom'
import './index.css'

class SearchAutoComplete extends Component {
  render () {
    const { data: { loading, autoComplete } } = this.props
    console.log('props', this.props)

    return (
      <div className="SearchAutoComplete">
        {loading ? (
          <SpinnerSmall />
        ) : (
          <ul>
            {autoComplete.autoComplete.length > 0 ? autoComplete.autoComplete.map((result, key) => (
              <Link key={key} to={``}>
                <li>
                  {result.name}
                </li>
              </Link>
            )) : (
              <li>Brak wyników</li>
            )}
          </ul>
        )}
      </div>
    )
  }
}

export const AutoCompleteWithQuery =
  graphql(autoComplete)(SearchAutoComplete)
