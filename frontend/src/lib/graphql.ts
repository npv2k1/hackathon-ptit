import {
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  ssrExchange,
} from '@urql/core'
import { getToken } from './getToken'
const isServerSide = typeof window === 'undefined'
const ssrCache = ssrExchange({ isClient: !isServerSide })
import { subscriptionExchange } from 'urql'
import { createClient as createWSClient } from 'graphql-ws'

// import wsClient from './wsClient'
const wsClient = isServerSide
  ? null
  : createWSClient({
      url: process.env.NEXT_PUBLIC_GRAPHQL_WS_ENDPOINT || '',
      connectionParams: () => {
        const token = getToken()
        if (token) {
          return {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        } else
          return {
            headers: {},
          }
      },
    })

const client = createClient({
  url: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT || '',
  exchanges: [
    dedupExchange,
    cacheExchange,
    ssrCache,
    fetchExchange,
    subscriptionExchange({
      forwardSubscription: (operation) => ({
        // @ts-ignore
        subscribe: (sink: any) => ({
          unsubscribe: wsClient?.subscribe(operation, sink),
        }),
      }),
    }),
  ],
  // @ts-ignore
  fetchOptions: () => {
    const token = getToken()
    if (token) {
      return {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    } else
      return {
        headers: {},
      }
  },
})

export { client, ssrCache }
