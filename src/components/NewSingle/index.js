import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import news from '../../queries/news'
import Spinner from '../Loader/Spinner'
// import './index.css'

class NewSingle extends Component {
  render () {
    const { data: { loading, news } } = this.props
    if (loading) return <Spinner />
    const { content, title, username, date } = news
    return (
      <div>
        <h1>{title}</h1>
        <p>{date}</p>
        <small>{username}</small>
        <hr/>
        <div>
          {content}
        </div>
      </div>
    )
  }
}

const NewSingleWithQuery = graphql(news)(NewSingle)

const NewSingleWithParams = ({ match: { params: { id } } }) => (
  <NewSingleWithQuery _id={id} />
)
export default NewSingleWithParams
