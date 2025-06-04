import { useQuery } from '@tanstack/react-query'

import css from '@/pages/allIdeasPage/index.module.scss'
import { IdeaCard } from '@/pages/allIdeasPage/ui/ideaCard'
import { trpc } from '@/shared/lib/trpc'
import { Segment } from '@/shared/ui/segment'

export const AllIdeasPage = () => {
  const { data, error, isError, isFetching, isLoading } = useQuery(
    trpc.getIdeas.queryOptions()
  )

  if (isLoading || isFetching) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>{error.message}</div>
  }

  return (
    <Segment title='All Ideas'>
      <div className={css.ideas}>
        {data?.ideas.map((idea) => <IdeaCard idea={idea} key={idea.nick} />)}
      </div>
    </Segment>
  )
}
