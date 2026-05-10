import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UseParam from './useParam.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseParam />
  </StrictMode>,
)
