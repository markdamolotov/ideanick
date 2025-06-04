import { Link, Outlet } from 'react-router'

import css from '@/app/layout/layout.module.scss'
import { getAllIdeasRoute } from '@/shared/lib/routes'

export const Layout = () => {
  return (
    <div className={css.layout}>
      <header className={css.header}>
        <div className={css.logo}>IdeaNick</div>
        <nav className={css.navigation}>
          <ul>
            <li>
              <Link to={getAllIdeasRoute()}>All Ideas</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={css.main}>
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  )
}
