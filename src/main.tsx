import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CardSection } from './pages/CardSection.tsx'
import { Footer } from './components/footer.tsx'
import { ConhecaOPorjeto } from './pages/Section-ConhecaoProjeto.tsx'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConhecaOPorjeto/>
    <CardSection/>
    <Footer/>
  </StrictMode>,
)
