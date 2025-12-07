import HorizontalScrollSection from './components/HorizontalScrollSection';
import VerticalSection from './components/VerticalSection';
import IntroSection from './sections/IntroSection';
import LongHorizontalSection from './sections/LongHorizontalSection';
import FirstHorizontalSection from './sections/FirstHorizontalSection';
import './App.css';

function App() {
  // Panel data for first horizontal section
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
      description: 'Push boundaries and reimagine what\'s possible with cutting-edge technology.',
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

  // (Optional) Remove if not using panel arrays for horizontals

  return (
    <div className="app">
      {/* Section 1: Hero/Intro - Vertical */}
      <VerticalSection backgroundColor="#0f0f1e" className="intro-vertical">
        <IntroSection />
      </VerticalSection>

      {/* Section 2: First Horizontal - Sliding panels */}
      <HorizontalScrollSection panels={panels1} />

      {/* Section 3: About/Features - Vertical */}
      <VerticalSection backgroundColor="#1a1a2e">
        <h2>Built for Innovation</h2>
        <p>
          A modern approach to web scrolling that creates engaging,
          memorable experiences for your users.
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <span className="icon">⚡</span>
            <h4>Performant</h4>
            <p>Optimized with CSS transforms and passive scroll listeners for smooth 60fps animations.</p>
          </div>
          <div className="feature-card">
            <span className="icon">📱</span>
            <h4>Responsive</h4>
            <p>Adapts seamlessly across desktop, tablet, and mobile devices with touch support.</p>
          </div>
          <div className="feature-card">
            <span className="icon">🎯</span>
            <h4>Precise</h4>
            <p>Mathematical scroll mapping ensures accurate horizontal translation at every point.</p>
          </div>
          <div className="feature-card">
            <span className="icon">🎨</span>
            <h4>Beautiful</h4>
            <p>Modern design with smooth transitions, shadows, and glassmorphism effects.</p>
          </div>
        </div>
      </VerticalSection>

      {/* Section 4: Long Horizontal - Custom children */}
      <HorizontalScrollSection>
        <LongHorizontalSection />
        <FirstHorizontalSection />
      </HorizontalScrollSection>

      {/* Section 6: Footer/Contact - Vertical */}
      <VerticalSection backgroundColor="#0f0f1e">
        <h2>Ready to Begin?</h2>
        <p>
          Create your own alternating scroll experience and captivate your audience
          with this innovative approach to web design.
        </p>
        <button className="cta-button">Get Started</button>
        <div className="footer-info">
          <p style={{ marginTop: '3rem', fontSize: '1rem', opacity: 0.6 }}>
            Built with React, Vite, and modern web technologies
          </p>
        </div>
      </VerticalSection>
    </div>
  );
}

export default App;
