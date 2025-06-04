import { Link, Outlet } from 'react-router'

import css from '@/app/layout/layout.module.scss'
import { getAllIdeasRoute, getNewIdeaRoute } from '@/shared/lib/routes'

export const Layout = () => {
  return (
    <div className={css.layout}>
      <header className={css.header}>
        <h1 className={css.logo}>IdeaNick</h1>
        <nav className={css.navigation}>
          <ul className={css.links}>
            <li>
              <Link to={getAllIdeasRoute()}>All Ideas</Link>
            </li>
            <li>
              <Link to={getNewIdeaRoute()}>Add Idea</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={css.main}>
        <Outlet />
      </main>
    </div>
  )
}
