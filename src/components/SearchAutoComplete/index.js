import React, {Component,Fragment} from 'react'
import autoComplete from '../../queries/autoComplete'
import SpinnerSmall from '../Loader/SpinnerSmall'
import { graphql } from 'react-apollo'
// Components
import { Link } from 'react-router-dom'
import './index.css'

class SearchAutoComplete extends Component {
  node = null

  componentWillReceiveProps (nextProps) {
    console.log(nextProps)
  }

  componentWillMount () {
    window.addEventListener('click', this.onBackdropClick)
  }

  componentWillUnmount () {
    window.removeEventListener('click', this.onBackdropClick)
  }

  onBackdropClick = ({ target }) => {
    if (!this.node.contains(target)) {
      window.removeEventListener('click', this.onBackdropClick, false)
      this.props.onClearSearch()
    }
  }

  render () {
    const { data: { loading, autoComplete } } = this.props
    return (
      <div className="SearchAutoComplete" ref={r => { this.node = r }}>
        {loading ? (
          <SpinnerSmall />
        ) : (
          <Fragment>
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
            {autoComplete.allResultsCount > 10 && (
              <ul>
                <hr />
                <Link to={``}>
                  <li>
                    Pokaż więcej
                  </li>
                </Link>
              </ul>
            )}
          </Fragment>
        )}
      </div>
    )
  }
}

export const AutoCompleteWithQuery =
  graphql(autoComplete)(SearchAutoComplete)
