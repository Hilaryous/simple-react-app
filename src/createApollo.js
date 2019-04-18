import { decamelize, camelize } from 'humps'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { RestLink } from 'apollo-link-rest'
import { onError } from 'apollo-link-error'

const { NODE_ENV } = process.env
export const isDev = NODE_ENV === 'development'

const sendToConsole = (...props) => {
  if (isDev) {
    // eslint-disable-next-line no-console
    console.error(...props)
  }
}

export default () => {
  const restLink = new RestLink({
    fieldNameDenormalizer: key => decamelize(key),
    fieldNameNormalizer: key => camelize(key),
    uri: 'https://swapi.co',
  })

  const errorLink = onError(({ graphQLErrors, networkError, operation, response }) => {
    if (networkError) {
      const { statusCode } = networkError
      // Auth token failed...
      if (statusCode === 403 || statusCode === 401) {
        return
      }
      // Some sort of network error...
      sendToConsole(`${networkError.statusCode} [Network Error]:`, networkError, { operation })
      return
    }

    if (graphQLErrors) {
      const errors = graphQLErrors.map(({ message }) => message)
      sendToConsole(`[${errors.length} GraphQL Errors]:`, errors, { graphQLErrors, operation, response })
      return
    }

    // fubar...
    sendToConsole('[ErrorLink] fall through:', { graphQLErrors, networkError, operation, response })
  })
  const link = ApolloLink.from([
    errorLink,
    restLink,
  ])

  return new ApolloClient({ cache: new InMemoryCache(), link })
}
