import gql from 'graphql-tag'

export default gql`
query autoComplete ($regex: String!) {
  autoComplete(regex: $regex) {
    autoComplete {
      _id
      name
    }
    allResultsCount
  }
}
`
