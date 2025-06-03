import { Route, Routes } from 'react-router'

import { getAllIdeasRoute, getViewIdeaRoute } from './lib/routes'
import { AllIdeasPage } from './pages/allIdeasPage'
import { ViewIdeaPage } from './pages/viewIdeaPage'

export const App = () => {
  return (
    <Routes>
      <Route element={<AllIdeasPage />} path={getAllIdeasRoute()} />
      <Route
        element={<ViewIdeaPage />}
        path={getViewIdeaRoute({ ideaNick: ':ideaNick' })}
      />
    </Routes>
  )
}
