import { useEffect } from 'react'
import './mobileMenuOverlay.css'
import HamburgerMenu from './hamburgerMenu'

export default function MobileMenuOverlay({ onClose, onToggle, open }) {
  useEffect(() => {
    const handler = e => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      className="mobile-menu-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
    >
      <div className="overlay-top-bar">
        <HamburgerMenu open={open} onToggle={onToggle} />
      </div>
      <nav className="mobile-menu-nav">
        <ul>
          <li><a href="#home" onClick={onClose}>Home</a></li>
          <li><a href="#about" onClick={onClose}>About</a></li>
          <li><a href="#tracks" onClick={onClose}>Tracks</a></li>
          <li><a href="#schedule" onClick={onClose}>Schedule</a></li>
          <li><a href="#faq" onClick={onClose}>FAQ</a></li>
          <li><a href="#sponsors" onClick={onClose}>Sponsors</a></li>
          <li><a href="#apply" onClick={onClose}>Apply</a></li>
        </ul>
      </nav>
    </div>
  )
}