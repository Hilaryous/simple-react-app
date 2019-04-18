import gql from 'graphql-tag'

const QUERY = gql`
  query {
    homeworld(url: $url) @rest(type: "Homeworld",  path: "{args.url}", method: "GET") {
      name
      climate
      gravity
    }
  }
`


export default QUERY
