import { initTRPC } from '@trpc/server'

const ideas = [
  { nick: 'nick1', name: 'name1', description: 'description1' },
  { nick: 'nick2', name: 'name2', description: 'description2' },
  { nick: 'nick3', name: 'name3', description: 'description3' }
]

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas }
  })
})

export type TrpcRouter = typeof trpcRouter
