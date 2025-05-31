import { initTRPC } from '@trpc/server'

const ideas = [
  { description: 'description1', name: 'name1', nick: 'nick1' },
  { description: 'description2', name: 'name2', nick: 'nick2' },
  { description: 'description3', name: 'name3', nick: 'nick3' }
]

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas }
  })
})

export type TrpcRouter = typeof trpcRouter
