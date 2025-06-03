import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router'

import { getViewIdeaRoute } from '../../shared/lib/routes'
import { trpc } from '../../shared/lib/trpc'

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
    <div>
      <ul>
        {data?.ideas.map((idea) => (
          <li key={idea.nick}>
            <Link to={getViewIdeaRoute({ ideaNick: idea.nick })}>
              <p>{idea.name}</p>
            </Link>
            <p>{idea.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
