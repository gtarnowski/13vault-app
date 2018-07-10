import React from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import { URLS } from '../../consts/urls'
import newsAll from '../../queries/newsAll'
import Paginator from '../Paginator'
import Spinner from '../Spinners/Spinner'
import FontIcon from '@fortawesome/react-fontawesome'
import faImage from '@fortawesome/fontawesome-free-solid/faImage'
import './index.css'

const News = ({ data: { newsAll, loading }, onPageChange }) => {
  if (loading) return <Spinner />
  const { pagination, news } = newsAll
  console.log(newsAll)
  return (
    <div className="News">
      {news.map(({ _id, title, description, date }, key) => (
        <Link to={URLS.NEWS + '/' + _id} key={key} >
          <div className="NewsItem">
            <div className="thumbnail">
              <FontIcon icon={faImage} size="4x"/>
            </div>
            <div className="content">
              <div className="title">
                <h3>{title}</h3>
                <hr/>
                <small>{date}</small>
              </div>
              <div className="content-box">
                <div
                  dangerouslySetInnerHTML={{__html: description}}
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
      <Paginator {...pagination} onPageChange={onPageChange}/>
    </div>
  )
}

export default graphql(newsAll)(News)
