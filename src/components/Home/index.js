import React from 'react'
import { graphql, compose } from 'react-apollo'
import newsAll from '../../queries/newsAll'

const Home = ({ data: { newsAll, loading} }) => {
  if (loading) return <div>loading...</div>
  console.log(newsAll)
  return (
    <div>
      {newsAll.map(({ title, content, date }, key) => (
        <div key={key}>
          {console.log(content)}
          {console.log('-------------------------------------')}
          <p><strong>{title}</strong> {date}</p>
          <br />
          <div
            dangerouslySetInnerHTML={{__html: content}}
          />
        </div>
      ))}
    </div>
  )
}

export default graphql(newsAll)(Home)
