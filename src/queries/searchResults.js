import gql from 'graphql-tag'

export default gql`
  query searchResults ($regex: String! $page: Int) {
    searchResults (regex: $regex page: $page) {
      results {
        content
        category
        _id
        title
        img {
          alt
          fileName
        }
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
