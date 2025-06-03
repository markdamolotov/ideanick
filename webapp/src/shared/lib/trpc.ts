import type { TrpcRouter } from '@ideanick/backend/src/trpc'

import { QueryClient } from '@tanstack/react-query'
import { createTRPCClient, httpBatchLink } from '@trpc/client'
import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
})

const trpcClient = createTRPCClient<TrpcRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc'
    })
  ]
})

export const trpc = createTRPCOptionsProxy<TrpcRouter>({
  client: trpcClient,
  queryClient
})
