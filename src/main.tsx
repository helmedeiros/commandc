import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './ui/App'
import { BrowserClipboard } from './adapters/BrowserClipboard'

const clipboard = new BrowserClipboard()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App clipboard={clipboard} />
  </StrictMode>,
)
