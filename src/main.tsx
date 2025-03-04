
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from './components/ui/sonner'
import { GodsProvider } from './context/GodsContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GodsProvider>
        <App />
        <Toaster />
      </GodsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
