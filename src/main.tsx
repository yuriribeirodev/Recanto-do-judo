import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CardSection } from './pages/CardSection.tsx'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CardSection/>
  </StrictMode>,
)
