import { Link } from 'react-router'

import css from '@/pages/allIdeasPage/ui/ideaCard/index.module.scss'
import { getViewIdeaRoute } from '@/shared/lib/routes'

export const IdeaCard = ({
  idea
}: {
  idea: { description: string; name: string; nick: string }
}) => {
  return (
    <div className={css.idea} key={idea.nick}>
      <h3 className={css.ideaTitle}>
        <Link to={getViewIdeaRoute({ ideaNick: idea.nick })}>{idea.name}</Link>
      </h3>
      <p>{idea.description}</p>
    </div>
  )
}
