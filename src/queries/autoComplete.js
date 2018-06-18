import gql from 'graphql-tag'

export default gql`
query autoComplete ($regex: String! $limit: Int $page: Int = 1) {
  autoComplete(regex: $regex limit: $limit page: $page) {
    autoComplete {
      id
      name
    }
    pagination {
      total,
      page
    }
  }
}
`
