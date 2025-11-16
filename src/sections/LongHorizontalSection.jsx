import './LongHorizontalSection.css';

export default function LongHorizontalSection() {
  const stops = [
    { title: 'Discover', desc: 'Kick off your journey with bold ideas.' },
    { title: 'Explore',  desc: 'Try many paths and find the best one.' },
    { title: 'Create',   desc: 'Design and build delightful experiences.' },
    { title: 'Iterate',  desc: 'Prototype, test, and refine quickly.' },
    { title: 'Launch',   desc: 'Ship your work and celebrate wins.' },
    { title: 'Scale',    desc: 'Grow impact and reach new users.' },
  ];

  return (
    <div className="lh-strip">
      <div className="lh-bg" />
      <div className="lh-row">
        {stops.map((s, i) => (
          <div className="lh-cell" key={i}>
            <div className="lh-card">
              <div className="lh-eyebrow">Experience</div>
              <h2 className="lh-title">{s.title}</h2>
              <p className="lh-desc">{s.desc}</p>
              <div className="lh-actions">
                <button className="lh-btn primary">Get Started</button>
                <button className="lh-btn">Learn More</button>
              </div>
              <div className="lh-counter">{String(i + 1).padStart(2, '0')}/{String(stops.length).padStart(2, '0')}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
