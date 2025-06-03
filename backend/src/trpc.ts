import { initTRPC } from '@trpc/server'
import _ from 'lodash'

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
  getIdeas: trpc.procedure.query(() => {
    return {
      ideas: ideas.map((idea) => _.pick(idea, ['nick', 'name', 'description']))
    }
  })
})

export type TrpcRouter = typeof trpcRouter
