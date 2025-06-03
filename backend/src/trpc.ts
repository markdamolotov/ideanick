import { initTRPC } from '@trpc/server'
import _ from 'lodash'
import { z } from 'zod/v4'

const ideas = _.times(100, (index) => ({
  description: `Description of idea ${index}`,
  name: `Idea ${index}`,
  nick: `cool-idea-nick-${index}`,
  text: _.times(
    100,
    (index_) => `<p>Text paragraph ${index_} of idea ${index}</p>`
  ).join('')
}))

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getIdea: trpc.procedure
    .input(
      z.object({
        ideaNick: z.string()
      })
    )
    .query(({ input }) => {
      const idea = ideas.find((idea) => idea.nick === input.ideaNick)

      if (!idea) {
        throw new Error(`Idea ${input.ideaNick} not found`)
      }

      return { idea: idea || undefined }
    }),
  getIdeas: trpc.procedure.query(() => {
    return {
      ideas: ideas.map((idea) => _.pick(idea, ['nick', 'name', 'description']))
    }
  })
})

export type TrpcRouter = typeof trpcRouter
