import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'

import type { ViewIdeaRouteParameters } from '@/shared/lib/routes'

import css from '@/pages/viewIdeaPage/index.module.scss'
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
    <div className={css.idea}>
      <h1 className={css.title}>{data.idea.name}</h1>
      <p>{data.idea.description}</p>
      <div
        className={css.text}
        dangerouslySetInnerHTML={{ __html: data.idea.text }}
      />
    </div>
  )
}
