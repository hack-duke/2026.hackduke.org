import './ArcadeSection.css';

export default function ArcadeSection() {
  return (
    <div className="arcade-container">
      <div className="arcade-scene">
        {/* Background pattern */}
        <img src="/src/assets/bg-2.svg" alt="" className="arcade-bg-pattern" />

        {/* Floor base */}
        <img src="/src/assets/floor.svg" alt="" className="arcade-floor" />
        <img src="/src/assets/floor lines.svg" alt="" className="arcade-floor-lines" />

        {/* Main arcade machines */}
        <img src="/src/assets/cat arcade design - blue.svg" alt="Blue arcade machine" className="arcade-machine arcade-blue" />
        <img src="/src/assets/cat arcade design - green.svg" alt="Green arcade machine" className="arcade-machine arcade-green" />
        <img src="/src/assets/cat arcade design - red.svg" alt="Red arcade machine" className="arcade-machine arcade-red" />

        {/* Claw machine with all components */}
        <div className="arcade-claw-machine-container">
          <img src="/src/assets/bg.svg" alt="" className="claw-cabinet-base" />
          <img src="/src/assets/Vector 573.svg" alt="" className="claw-cable" />
          <img src="/src/assets/claw.svg" alt="Claw mechanism" className="claw-mechanism" />
          <img src="/src/assets/window frame.svg" alt="" className="claw-window-frame" />
          <img src="/src/assets/controls.svg" alt="Controls" className="claw-controls" />
          <img src="/src/assets/round controller thing.svg" alt="Round controller" className="claw-round-controller" />
          <img src="/src/assets/FAQ.svg" alt="FAQ" className="claw-faq-overlay" />
        </div>

        {/* Stack of gatcha - overlaps red arcade */}
        <img src="/src/assets/stack of gatcha.svg" alt="Gatcha prizes" className="claw-prizes" />

        {/* Foreground elements */}
        <img src="/src/assets/stairs cat.svg" alt="Cat on stairs" className="arcade-cat" />
        <img src="/src/assets/box stack.svg" alt="Box stack" className="arcade-boxes" />
        <img src="/src/assets/stool.svg" alt="Stool" className="arcade-stool-left" />
        <img src="/src/assets/stool-2.svg" alt="Stool" className="arcade-stool-right" />

        {/* Sponsor section */}
        <img src="/src/assets/sponsor placeholder.svg" alt="2025 Sponsors" className="arcade-sponsor-placeholder" />
        <img src="/src/assets/SPONSOR LOGOS.svg" alt="Sponsor Logos" className="arcade-sponsor-logos" />

        {/* Overlays and shading */}
        <img src="/src/assets/OVERLAYS.svg" alt="" className="arcade-overlays" />
        <img src="/src/assets/shading.svg" alt="" className="arcade-shading-1" />
        <img src="/src/assets/shading-2.svg" alt="" className="arcade-shading-2" />
      </div>
    </div>
  );
}
