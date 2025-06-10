import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globalStyles.css'
import App from './pages/Main/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
