import gql from 'graphql-tag'

export default gql`
  query user {
    user {
      _id
      username
      firstName
      lastName
      email
      initials
      fullName
    }
  }
`
