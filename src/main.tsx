import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CardSection } from './pages/CardSection.tsx'
import { Footer } from './pages/Footer.tsx'
import { ConhecaOProjeto } from './pages/Section-ConhecaoProjeto.tsx'
import './styles/index.css'
import Header from './pages/Header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <ConhecaOProjeto/>
    <CardSection/>
    <Footer/>
  </StrictMode>,
)
