import gql from 'graphql-tag'

const QUERY = gql`
  query {
    people @rest(type: "Person",  path: "/api/people", method: "GET") {
      results @type(name: "Person") {
        name
        height
        mass
        gender
        homeworld
      }
    }
  }
`


export default QUERY
