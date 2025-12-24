import './ArcadeSection.css';
import { SponsorsMarquee } from '../components/SponsorsMarquee';
import Accordion from '../components/Accordion';
import { FAQ_QUESTIONS } from '../constants/faqQuestions';

export default function ArcadeSection() {
  return (
    <div className="arcade-container">
      <div className="arcade-scene">
        {/* Background pattern */}
        <img src="/src/assets/bg-2.svg" alt="" className="arcade-bg-pattern" />

        {/* Floor base */}
        <img src="/src/assets/floor.svg" alt="" className="arcade-floor" />
        <img src="/src/assets/floor lines.svg" alt="" className="arcade-floor-lines" />

        {/* Shadows for depth */}
        <div className="arcade-shadow arcade-shadow-1"></div>
        <div className="arcade-shadow arcade-shadow-2"></div>
        <div className="arcade-shadow arcade-shadow-3"></div>
        <div className="arcade-shadow arcade-shadow-4"></div>
        <div className="arcade-shadow arcade-shadow-5"></div>

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
          <img src="/src/assets/FAQ.svg" alt="FAQ" className="claw-faq-sign" />

          {/* FAQ Accordion */}
          <div className="claw-faq-questions">
            <Accordion items={FAQ_QUESTIONS} />
          </div>
        </div>

        {/* Stack of gatcha - overlaps red arcade */}
        <img src="/src/assets/stack of gatcha.svg" alt="Gatcha prizes" className="claw-prizes" />

        {/* Foreground elements */}
        <img src="/src/assets/stairs cat.svg" alt="Cat on stairs" className="arcade-cat" />
        <img src="/src/assets/box stack.svg" alt="Box stack" className="arcade-boxes" />
        <img src="/src/assets/stool-2.svg" alt="Stool" className="arcade-stool-right" />

        {/* Sponsor section */}
        <img src="/src/assets/sponsor placeholder.svg" alt="2025 Sponsors" className="arcade-sponsor-placeholder" />
        <div className="arcade-sponsor-marquee">
          <SponsorsMarquee />
        </div>

        {/* Overlays and shading */}
        <img src="/src/assets/OVERLAYS.svg" alt="" className="arcade-overlays" />
        <img src="/src/assets/shading.svg" alt="" className="arcade-shading-1" />
        <img src="/src/assets/shading-2.svg" alt="" className="arcade-shading-2" />
      </div>
    </div>
  );
}
