import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CardSection } from './pages/CardSection.tsx'
import { Footer } from './components/footer.tsx'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CardSection/>
    <Footer/>
  </StrictMode>,
)
