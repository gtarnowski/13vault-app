import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const signInMutation = graphql(gql`
  mutation signIn($username: String! $password: String!) {
    signIn(username: $username password: $password) {
      result {
        reason {
          code
          message
        }
        success
      }
      token
    }
  }
`)
export default signInMutation
