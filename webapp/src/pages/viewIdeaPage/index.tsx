import { useParams } from 'react-router'

import type { ViewIdeaRouteParameters } from '@/shared/lib/routes'

export const ViewIdeaPage = () => {
  const { ideaNick } = useParams() as ViewIdeaRouteParameters

  return (
    <div>
      <h1>{ideaNick}</h1>
      <p>Description of idea</p>
      <div>
        <p>Text paragraph 1</p>
        <p>Text paragraph 2</p>
        <p>Text paragraph 3</p>
      </div>
    </div>
  )
}
