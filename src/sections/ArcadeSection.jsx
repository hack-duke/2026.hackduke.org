import './ArcadeSection.css';
import { SponsorsMarquee } from '../components/SponsorsMarquee';
import Accordion from '../components/Accordion';
import { FAQ_QUESTIONS } from '../constants/faqQuestions';
import bgPatternSvg from '../assets/bg-2.svg';
import floorSvg from '../assets/floor.svg';
import floorLinesSvg from '../assets/floor lines.svg';
import arcadeBlueSvg from '../assets/cat arcade design - blue.svg';
import arcadeGreenSvg from '../assets/cat arcade design - green.svg';
import arcadeRedSvg from '../assets/cat arcade design - red.svg';
import cabinetBaseSvg from '../assets/bg.svg';
import cableSvg from '../assets/Vector 573.svg';
import clawSvg from '../assets/claw.svg';
import windowFrameSvg from '../assets/window frame.svg';
import controlsSvg from '../assets/controls.svg';
import roundControllerSvg from '../assets/round controller thing.svg';
import faqSvg from '../assets/FAQ.svg';
import stackGatchaSvg from '../assets/stack of gatcha.svg';
import stairsCatSvg from '../assets/stairs cat.svg';
import boxStackSvg from '../assets/box stack.svg';
import stoolRightSvg from '../assets/stool-2.svg';
import sponsorPlaceholderSvg from '../assets/sponsor placeholder.svg';
import overlaysSvg from '../assets/overlays.svg';
import shadingSvg from '../assets/shading.svg';
import shading2Svg from '../assets/shading-2.svg';

export default function ArcadeSection() {
  return (
    <div className="arcade-container">
      <div className="arcade-scene">
        {/* Background pattern */}
        <img src={bgPatternSvg} alt="" className="arcade-bg-pattern" />

        {/* Floor base */}
        <img src={floorSvg} alt="" className="arcade-floor" />
        <img src={floorLinesSvg} alt="" className="arcade-floor-lines" />

        {/* Shadows for depth */}
        <div className="arcade-shadow arcade-shadow-1"></div>
        <div className="arcade-shadow arcade-shadow-2"></div>
        <div className="arcade-shadow arcade-shadow-3"></div>
        <div className="arcade-shadow arcade-shadow-4"></div>
        <div className="arcade-shadow arcade-shadow-5"></div>

        {/* Main arcade machines */}
        <img src={arcadeBlueSvg} alt="Blue arcade machine" className="arcade-machine arcade-blue" />
        <img src={arcadeGreenSvg} alt="Green arcade machine" className="arcade-machine arcade-green" />
        <img src={arcadeRedSvg} alt="Red arcade machine" className="arcade-machine arcade-red" />

        {/* Claw machine with all components */}
        <div className="arcade-claw-machine-container">
          <img src={cabinetBaseSvg} alt="" className="claw-cabinet-base" />
          <img src={cableSvg} alt="" className="claw-cable" />
          <img src={clawSvg} alt="Claw mechanism" className="claw-mechanism" />
          <img src={windowFrameSvg} alt="" className="claw-window-frame" />
          <img src={controlsSvg} alt="Controls" className="claw-controls" />
          <img src={roundControllerSvg} alt="Round controller" className="claw-round-controller" />
          <img alt="FAQ" className="claw-faq-overlay" src={faqSvg} />
          <img src={faqSvg} alt="FAQ" className="claw-faq-sign" />

          {/* FAQ Accordion */}
          <div id="faqs" className="claw-faq-questions">
            <Accordion items={FAQ_QUESTIONS} />
          </div>
        </div>

        {/* Stack of gatcha - overlaps red arcade */}
        <img src={stackGatchaSvg} alt="Gatcha prizes" className="claw-prizes" />

        {/* Foreground elements */}
        <img src={stairsCatSvg} alt="Cat on stairs" className="arcade-cat" />
        <img src={boxStackSvg} alt="Box stack" className="arcade-boxes" />
        <img src={stoolRightSvg} alt="Stool" className="arcade-stool-right" />

        {/* Sponsor section */}
        <img id="sponsors" src={sponsorPlaceholderSvg} alt="2025 Sponsors" className="arcade-sponsor-placeholder" />
        <div className="arcade-sponsor-marquee">
          <SponsorsMarquee />
        </div>

        {/* Overlays and shading */}
        <img src={overlaysSvg} alt="" className="arcade-overlays" />
        <img src={shadingSvg} alt="" className="arcade-shading-1" />
        <img src={shading2Svg} alt="" className="arcade-shading-2" />
      </div>
    </div>
  );
}
