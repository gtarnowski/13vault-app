import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import { ApolloLink, concat } from 'apollo-link'

import './styles/main.css'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: window.localStorage.getItem('token') || null
    }
  })

  return forward(operation)
})

const client = new ApolloClient({
  link: concat(authMiddleware, new HttpLink({uri: process.env.REACT_APP_GRAPHQL_ENDPOINT})),
  cache: new InMemoryCache()
})

window.apollo = client
ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,
  document.getElementById('root'))

registerServiceWorker()

export { ApolloProvider, client }
