import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import ApplyButton from './components/applyButton'
import HamburgerMenu from './components/hamburgerMenu'

function App() {
  const [count, setCount] = useState(0)
  const [showHeader, setShowHeader] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    lastScrollY.current = window.scrollY
    let ticking = false
    const threshold = 5
    const onScroll = () => {
      const current = window.scrollY
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const delta = current - lastScrollY.current
          if (current <= 0) {
            setShowHeader(true)
            lastScrollY.current = 0
            ticking = false
            return
          }
            // Close mobile menu when user scrolls down
          if (Math.abs(delta) > threshold) {
            if (delta > 0) {
              setShowHeader(false)
              setMobileOpen(false)
            } else {
              setShowHeader(true)
            }
            lastScrollY.current = current
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className={`sticky-header ${showHeader ? 'show' : 'hide'}`}>
        <div className="header-items">
          <Navbar className="desktop-only" />
          <HamburgerMenu
            open={mobileOpen}
            onToggle={() => setMobileOpen(o => !o)}
          />
          {mobileOpen && (
            <>
              <Navbar className="mobile-inline" />
              <ApplyButton className="mobile-inline" />
            </>
          )}
        </div>
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
