import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header/header.jsx'
import Projects from './components/projects/projects.jsx'
import Hero from './components/hero/hero.jsx'
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Hero/>
    <Projects/>
    <App />
  </StrictMode>,
)
