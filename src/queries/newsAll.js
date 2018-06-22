import gql from 'graphql-tag'

export default gql`
  query newsAll($page: Int = 1) {
    newsAll(page: { limit: 25, page: $page }) {
      news {
        title
        _id
        email
        username
        content
        date
        description
      }
      pagination {
        page
        pages
        total
        limit
      }
    }
  }
`
