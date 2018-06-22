import gql from 'graphql-tag'

export default gql`
  query news ($_id: ID!) {
    news(_id: $_id) {
      _id
      content
      title
      userId
      username
      date
    }
  }
`
