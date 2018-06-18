import gql from 'graphql-tag'

export default gql`
  query articlesAll ($limit: Int $page: Int = 1 $root: ArticleRoots!) {
    articlesAll (limit: $limit page: $page root: $root) {
      articles {
        _id
        root
        title
        content
        copyright
        fields {
          name
          value
        }
        img {
          fileName
          alt
        }
      }
      pagination {
        page
      }
    }
  }
`
