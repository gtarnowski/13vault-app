import gql from 'graphql-tag'

export default gql`
  query newsAll {
    newsAll {
      title
      id
      content
      date
    }
  }
`
