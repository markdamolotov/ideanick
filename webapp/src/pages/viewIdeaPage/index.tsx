import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'

import type { ViewIdeaRouteParameters } from '@/shared/lib/routes'

import css from '@/pages/viewIdeaPage/index.module.scss'
import { trpc } from '@/shared/lib/trpc'
import { Segment } from '@/shared/ui/segment'

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
    <Segment description={data.idea.description} title={data.idea.name}>
      <div
        className={css.text}
        dangerouslySetInnerHTML={{ __html: data.idea.text }}
      />
    </Segment>
  )
}
