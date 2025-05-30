import { useQuery } from '@tanstack/react-query'
import { trpc } from '../../lib/trpc'

export const AllIdeasPage = () => {
  const { data, error, isLoading, isFetching, isError } = useQuery(
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
            <p>{idea.name}</p>
            <p>{idea.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
