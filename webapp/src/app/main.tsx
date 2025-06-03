import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { QueryProvider } from './query-provider'
import { Router } from './router'

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <QueryProvider>
      <Router />
    </QueryProvider>
  </StrictMode>
)
