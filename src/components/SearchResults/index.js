import React, {Component} from 'react'
import autoComplete from '../../queries/autoComplete'
import './index.css'
import { withRouter } from 'react-router-dom'
import SpinnerSmall from '../Loader/SpinnerSmall'
import { graphql } from 'react-apollo'

class SearchResults extends Component {
  render () {
    const { data: { loading, autoComplete } } = this.props
    console.log(autoComplete)
    return (
      <div>

      </div>
    )
  }
}

export default graphql(autoComplete)(SearchResults)
