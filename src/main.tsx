import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CardSection } from './pages/CardSection.tsx'
import { Footer } from './pages/Footer.tsx'
import { ConhecaOProjeto } from './pages/Section-ConhecaoProjeto.tsx'
import { DepoimentoCriador } from './pages/Section-DepoimentoCriador.tsx'
import { Depoimentos } from './pages/Section-Depoimentos.tsx'
import { Gallery } from './pages/Gallery.tsx'
import { Apoiadores } from './pages/Section-Apoiadores.tsx'
import './styles/index.css'
import Header from './pages/Header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <ConhecaOProjeto/>
    <DepoimentoCriador/>
    <Depoimentos/>
    <CardSection/>
    <Gallery/>
    <Apoiadores/>
    <Footer/>
  </StrictMode>,
)
