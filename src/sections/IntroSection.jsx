import './IntroSection.css';

export default function IntroSection() {
  return (
    <div className="intro-container">
      <nav className="intro-navbar">
        <div className="intro-brand">HackDuke</div>
        <ul className="intro-nav-items">
          <li>About</li>
          <li>Tracks</li>
          <li>Schedule</li>
          <li>FAQ</li>
        </ul>
      </nav>

      <header className="intro-hero">
        <div className="intro-hero-content">
          <div className="intro-eyebrow">Welcome to the Future</div>
          <h1>Scroll Beyond Limits</h1>
          <p>
            An extended intro section to stress-test vertical height, sticky nav,
            and image-heavy layouts before switching to horizontal scroll.
          </p>
          <div className="intro-cta-row">
            <button className="intro-cta primary">Get Tickets</button>
            <button className="intro-cta">Learn More</button>
          </div>
        </div>
      </header>

      <section className="intro-gallery">
        {[1,2,3,4,5,6,7,8].map((n) => (
          <figure key={n} className="intro-card">
            <img
              loading="lazy"
              src={`https://picsum.photos/seed/hackduke-${n}/800/600`}
              alt={`Gallery ${n}`}
            />
            <figcaption>Inspiration {n}</figcaption>
          </figure>
        ))}
      </section>

      {/* Stats strip */}
      <section className="intro-stats">
        <div className="intro-stat">
          <div className="intro-stat-value">2k+</div>
          <div className="intro-stat-label">Attendees</div>
        </div>
        <div className="intro-stat">
          <div className="intro-stat-value">48h</div>
          <div className="intro-stat-label">Code + Create</div>
        </div>
        <div className="intro-stat">
          <div className="intro-stat-value">$150k</div>
          <div className="intro-stat-label">In Prizes</div>
        </div>
        <div className="intro-stat">
          <div className="intro-stat-value">60+</div>
          <div className="intro-stat-label">Workshops</div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="intro-features">
        {[
          { icon: '⚡', title: 'Performant', desc: '60fps animations with GPU-accelerated transforms.' },
          { icon: '📱', title: 'Responsive', desc: 'Looks great on every screen and device.' },
          { icon: '🔒', title: 'Secure', desc: 'Best practices across the stack.' },
          { icon: '🧭', title: 'Accessible', desc: 'Inclusive, keyboard-friendly experiences.' }
        ].map((f, i) => (
          <article className="intro-feature" key={i}>
            <div className="intro-feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </article>
        ))}
      </section>

      {/* Timeline */}
      <section className="intro-timeline">
        {[
          { step: 'Register', desc: 'Save your spot and join the community.' },
          { step: 'Form Teams', desc: 'Connect with makers to build something bold.' },
          { step: 'Hack', desc: 'Prototype, iterate, and ship your vision.' },
          { step: 'Demo', desc: 'Showcase your work and get recognized.' }
        ].map((t, i) => (
          <div className="intro-timeline-item" key={i}>
            <div className="intro-timeline-dot" />
            <div className="intro-timeline-content">
              <h4>{t.step}</h4>
              <p>{t.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Sponsors grid (placeholders) */}
      <section className="intro-sponsors">
        {[...Array(10)].map((_, i) => (
          <div className="intro-sponsor" key={i}>LOGO</div>
        ))}
      </section>

      <footer className="intro-footer">
        <div className="intro-footer-inner">
          <span>Built with React + Vite</span>
          <span>© {new Date().getFullYear()} HackDuke</span>
        </div>
      </footer>
    </div>
  );
}
