import { BrowserRouter, Route, Routes } from 'react-router'

import { Layout } from '@/app/layout/layout'
import { AllIdeasPage } from '@/pages/allIdeasPage'
import { NewIdeaPage } from '@/pages/newIdeaPage'
import { ViewIdeaPage } from '@/pages/viewIdeaPage'
import {
  getAllIdeasRoute,
  getNewIdeaRoute,
  getViewIdeaRoute,
  viewIdeaRouteParameters
} from '@/shared/lib/routes'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<AllIdeasPage />} path={getAllIdeasRoute()} />
          <Route element={<NewIdeaPage />} path={getNewIdeaRoute()} />
          <Route
            element={<ViewIdeaPage />}
            path={getViewIdeaRoute(viewIdeaRouteParameters)}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
