import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CardSection } from './pages/CardSection.tsx'
import { Footer } from './pages/Footer.tsx'
import { ConhecaOProjeto } from './pages/Section-ConhecaoProjeto.tsx'
import { DepoimentoCriador } from './pages/Section-DepoimentoCriador.tsx'
import { Gallery } from './pages/Gallery.tsx'
import './styles/index.css'
import Header from './pages/Header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <ConhecaOProjeto/>
    <DepoimentoCriador/>
    <CardSection/>
    <Gallery/>
    <Footer/>
  </StrictMode>,
)
