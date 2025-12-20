import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Landing from './components/Landing.jsx'

function Root() {
  const [showMain, setShowMain] = useState(false);

  if (!showMain) {
    return <Landing onEnter={() => setShowMain(true)} />;
  }

  return <App />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
