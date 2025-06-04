import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { QueryProvider } from '@/app/query-provider'
import { Router } from '@/app/router'
import '@/app/styles/global.scss'

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <QueryProvider>
      <Router />
    </QueryProvider>
  </StrictMode>
)
