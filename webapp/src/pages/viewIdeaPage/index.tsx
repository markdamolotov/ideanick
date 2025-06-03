import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'

import type { ViewIdeaRouteParameters } from '@/shared/lib/routes'

import { trpc } from '@/shared/lib/trpc'

export const ViewIdeaPage = () => {
  const { ideaNick } = useParams() as ViewIdeaRouteParameters

  const { data, error, isError, isFetching, isLoading } = useQuery(
    trpc.getIdea.queryOptions({ ideaNick })
  )

  if (isLoading || isFetching) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>{error.message}</div>
  }

  if (!data?.idea) {
    return <div>No idea found</div>
  }

  return (
    <div>
      <h1>{data.idea.name}</h1>
      <p>{data.idea.description}</p>
      <div dangerouslySetInnerHTML={{ __html: data.idea.text }} />
    </div>
  )
}
