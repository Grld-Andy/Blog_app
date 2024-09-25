import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import BlogContextProvider from './context/BlogContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BlogContextProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </BlogContextProvider>
  </StrictMode>,
)
