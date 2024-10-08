import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ScreenSizeProvider } from './context/context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScreenSizeProvider>
      <App />
    </ScreenSizeProvider>  
  </StrictMode>,
)
