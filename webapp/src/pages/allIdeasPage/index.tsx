import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router'

import css from '@/pages/allIdeasPage/index.module.scss'
import { getViewIdeaRoute } from '@/shared/lib/routes'
import { trpc } from '@/shared/lib/trpc'

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
    <div className={css.container}>
      <h1 className={css.title}>All Ideas</h1>
      <div className={css.ideas}>
        {data?.ideas.map((idea) => (
          <div className={css.idea} key={idea.nick}>
            <h2 className={css.ideaTitle}>
              <Link to={getViewIdeaRoute({ ideaNick: idea.nick })}>
                {idea.name}
              </Link>
            </h2>
            <p>{idea.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
