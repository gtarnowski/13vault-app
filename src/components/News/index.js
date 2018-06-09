import React from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import { URLS } from '../../consts/urls'
import newsAll from '../../queries/newsAll'
import Paginator from '../Paginator'
import Spinner from '../Loader/Spinner'
import FontIcon from '@fortawesome/react-fontawesome'
import faImage from '@fortawesome/fontawesome-free-solid/faImage'
import './index.css'

const News = ({ data: { newsAll, loading }, onPageChange }) => {
  if (loading) return <Spinner />
  const { pagination, news } = newsAll
  return (
    <div className="News">
      {news.map(({ id, title, content, date }, key) => (
        <Link to={URLS.NEWS + '/' + id} key={key} >
          <div className="NewsBox">
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
                  dangerouslySetInnerHTML={{__html: content}}
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
