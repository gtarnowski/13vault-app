import React from 'react'
import articlesAll from '../../queries/articlesAll'
import { graphql } from 'react-apollo'
// import './index.css'

const Postapocalypse = ({ data: { articlesAll, loading } }) => {
  if (loading) return 'loading'
    const { articles, pagination } = articlesAll
    return (
        <div>
          {articles.map(({ title }, key) => (
            <p key={key}>
              {title}
            </p>
          ))}
        </div>
    )
}



export default graphql(articlesAll, { options: {
  variables: {
    root: 'POST_MOVIES'
  }
}})(Postapocalypse)
