import { BrowserRouter, Route, Routes } from 'react-router'

import { AllIdeasPage } from '@/pages/allIdeasPage'
import { ViewIdeaPage } from '@/pages/viewIdeaPage'
import {
  getAllIdeasRoute,
  getViewIdeaRoute,
  viewIdeaRouteParameters
} from '@/shared/lib/routes'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AllIdeasPage />} path={getAllIdeasRoute()} />
        <Route
          element={<ViewIdeaPage />}
          path={getViewIdeaRoute(viewIdeaRouteParameters)}
        />
      </Routes>
    </BrowserRouter>
  )
}
