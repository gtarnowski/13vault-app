import gql from 'graphql-tag'

export default gql`
  query news ($id: ID!) {
    news(id: $id) {
      content
      title
      userId
      username
      date
    }
  }
`
