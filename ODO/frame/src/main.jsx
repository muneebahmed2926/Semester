import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import NavBar from './components/layouts/NavBar.jsx'
import App from './App.jsx'
import Footer from './components/layouts/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <NavBar/>
    <App />
    <Footer/>
  </StrictMode>,
)
