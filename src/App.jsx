import { useState, useEffect, useRef } from 'react';
import './App.css';

import Navbar from './components/navbar';
import HamburgerMenu from './components/hamburgerMenu';
import MobileMenuOverlay from './components/MobileMenuOverlay';

import HorizontalScrollSection from './components/HorizontalScrollSection';
import VerticalSection from './components/VerticalSection';
import IntroSection from './sections/IntroSection';
import LongHorizontalSection from './sections/LongHorizontalSection';
import ArcadeSection from './sections/ArcadeSection';

function App() {
  // header / mobile menu state & scroll-hide behavior
  const [showHeader, setShowHeader] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    let ticking = false;
    const threshold = 5;

    const onScroll = () => {
      const current = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const delta = current - lastScrollY.current;

          if (current <= 0) {
            setShowHeader(true);
            lastScrollY.current = 0;
            ticking = false;
            return;
          }

          if (Math.abs(delta) > threshold) {
            if (delta > 0) {
              // scrolled down
              setShowHeader(false);
              setMobileOpen(false); // close overlay on downward scroll
            } else {
              // scrolled up
              setShowHeader(true);
            }
            lastScrollY.current = current;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock background scroll while menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  // Panel data for horizontal section
  const panels1 = [
    {
      id: 1,
      color: '#1abc9c',
      title: 'Discover',
      description: 'Embark on a journey of exploration and unlock new possibilities in the digital world.',
      emoji: '🚀'
    },
    {
      id: 2,
      color: '#3498db',
      title: 'Explore',
      description: 'Dive deep into innovative solutions that transform the way we create and connect.',
      emoji: '🌊'
    },
    {
      id: 3,
      color: '#9b59b6',
      title: 'Create',
      description: 'Build extraordinary experiences that captivate and inspire your audience.',
      emoji: '✨'
    },
    {
      id: 4,
      color: '#e67e22',
      title: 'Innovate',
      description: "Push boundaries and reimagine what's possible with cutting-edge technology.",
      emoji: '💡'
    },
    {
      id: 5,
      color: '#2ecc71',
      title: 'Achieve',
      description: 'Reach your goals and celebrate success through dedication and creativity.',
      emoji: '🎯'
    }
  ];

  return (
    <>
      {/* Sticky header */}
      <div className={`sticky-header ${showHeader ? 'show' : 'hide'} ${mobileOpen ? 'overlay-open' : ''}`}>
        <div className="header-items">
          <Navbar className="desktop-only" />
          <HamburgerMenu open={mobileOpen} onToggle={() => setMobileOpen(o => !o)} />
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <MobileMenuOverlay
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          onToggle={() => setMobileOpen(o => !o)}
        />
      )}

      <div className="app">
        {/* Section 1: Hero/Intro - Vertical */}
        <VerticalSection backgroundColor="#0f0f1e" className="intro-vertical">
          <IntroSection />
        </VerticalSection>

        {/* Section 2: First Horizontal - Sliding panels */}
        <HorizontalScrollSection panels={panels1} />


        {/* Section 3: Arcade - Vertical */}
        <VerticalSection backgroundColor="#0f0f1e" className="arcade-vertical">
          <ArcadeSection />
        </VerticalSection>
      </div>
    </>
  );
}

export default App;
