import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProjectBuilder from './ProjectBuilder'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProjectBuilder />
  </StrictMode>,
)
