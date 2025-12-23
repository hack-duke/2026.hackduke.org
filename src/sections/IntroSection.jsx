import './IntroSection.css';
import { useEffect, useRef, useState } from 'react';

export default function IntroSection() {
  const [canFall, setCanFall] = useState(false);
  const [activeTracks, setActiveTracks] = useState(new Set());
  const [animatingTracks, setAnimatingTracks] = useState(new Set());
  const canRef = useRef(null);
  const timeoutRef = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      if (canRef.current) {
        const rect = canRef.current.getBoundingClientRect();
        const triggerPoint = window.innerHeight * 1.0;

        if (rect.top < triggerPoint && !canFall) {
          setCanFall(true);
        } else if (rect.top > triggerPoint + 100 && canFall) {
          setCanFall(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [canFall]);

  useEffect(() => {
    if (canFall) {
      // Slide out tracks one at a time during the Can Falling animation
      const slideOutTimeouts = [];
      for (let i = 0; i < 4; i++) {
        slideOutTimeouts.push(
          setTimeout(() => {
            setAnimatingTracks(prev => new Set(prev).add(i));
          }, i * 200) // 200ms delay between each track
        );
      }

      // Slide them back in after the fall completes (1.25s) + a delay
      const slideBackDelay = 1250 + 200; // After fall animation + buffer
      const slideInTimeouts = [];
      for (let i = 0; i < 4; i++) {
        slideInTimeouts.push(
          setTimeout(() => {
            setAnimatingTracks(prev => {
              const newSet = new Set(prev);
              newSet.delete(i);
              return newSet;
            });
          }, slideBackDelay + i * 200)
        );
      }

      return () => {
        [...slideOutTimeouts, ...slideInTimeouts].forEach(timeout => clearTimeout(timeout));
      };
    }
  }, [canFall]);

  const handleTrackMouseEnter = (trackIndex) => {
    // Hovering over a track label causes it to be active (slide into view)
    if (timeoutRef.current[trackIndex]) clearTimeout(timeoutRef.current[trackIndex]);
    if (!activeTracks.has(trackIndex)){
       setActiveTracks(prev => new Set(prev).add(trackIndex));
    }
  };

  const handleTrackMouseLeave = (trackIndex) => {
    // Leaving a track label causes it to slide out of view after 2s
    timeoutRef.current[trackIndex] = setTimeout(() => {
      setActiveTracks(prev => {
        const newSet = new Set(prev);
        newSet.delete(trackIndex);
        return newSet;
      });
    }, 2000);
  };

  return (
    <div className="intro-container">
      <section className="down1">
        <img src="/images/date and about.svg" alt="" className="down1-dateAbout"/>
        <img src="/images/date.svg" alt="" className="down1-date"/>
        <img src="/images/ceiling.svg" alt="" className="down1-ceiling"/>
        <img src="/images/big sign.svg" alt="" className="down1-big_sign"/>
        <img src="/images/left sign.svg" alt="" className="down1-left_sign"/>
        <div className="down1-left_side">
          <img src="/images/Lucky Cat.svg" alt="" className="down1-lucky_cat"/>
          <img src="/images/left shelf and assets.svg" alt="" className="down1-left_shelf"/>
          <img src="/images/lower left.svg" alt="" className="down1-lower_left"/>
        </div>
        <img src="/images/right protrusion.svg" alt="" className="down1-right_protrusion"/>
        <div className="down1-right_side">
          <img src="/images/clay barrels.svg" alt="" className="down1-clay_barrels"/>
          <img src="/images/right shelf and assets.svg" alt="" className="down1-right_shelf"/>
          <img src="/images/right shelf underneath.svg" alt="" className="down1-right_shelf_underneath"/>
        </div>
        <div className="down1-vending">
          <img src="/images/CodeForGood Sign.svg" alt="" className="down1-codeforgood_sign"/>
          <img src="/images/vending.svg" alt="" className="down1-vending-image"/>
          <div className="down1-bottom_slot">
            <img src="/images/bottom slot lowest layer.svg" alt="" className="lowest_layer"/>
            <img
              ref={canRef}
              src="/images/START POSITION.svg"
              alt=""
              className={`start-position ${canFall ? 'falling' : ''}`}
            />
            <img src="/images/bottom slot top layer.svg" alt="" className="top_layer"/>
          </div>
        </div>
        <img src="/images/tracks sign.svg" alt="" className="tracks"/>
        <div className="tracks_symbols">
          <div className="tracks_sign">  
            {/* if this track label has already slid into view + user hovers over it, reset the timer of how long before label slides in*/}
            <img src="/images/sustainability.svg" alt="" className={`tracks_label ${activeTracks.has(0) || animatingTracks.has(0) ? 'active' : ''}`} onMouseEnter={() => handleTrackMouseEnter(0)} onMouseLeave={() => handleTrackMouseLeave(0)}/>
            
            {/* slide the track label out if 1) user hovers over it or 2) we're showing users to click on the track icon */}
            <img src="/images/sustainability symbol.svg" alt="" className="tracks_icon" onMouseEnter={() => handleTrackMouseEnter(0)} onMouseLeave={() => handleTrackMouseLeave(0)}/>
          </div>
          <div className="tracks_sign">
            <img src="/images/finance.svg" alt="" className={`tracks_label ${activeTracks.has(1) || animatingTracks.has(1) ? 'active' : ''}`} onMouseEnter={() => handleTrackMouseEnter(1)} onMouseLeave={() => handleTrackMouseLeave(1)}/>
            <img src="/images/finance symbol.svg" alt="" className="tracks_icon" onMouseEnter={() => handleTrackMouseEnter(1)} onMouseLeave={() => handleTrackMouseLeave(1)}/>
          </div>
          <div className="tracks_sign">
            <img src="/images/health.svg" alt="" className={`tracks_label ${activeTracks.has(2) || animatingTracks.has(2) ? 'active' : ''}`} onMouseEnter={() => handleTrackMouseEnter(2)} onMouseLeave={() => handleTrackMouseLeave(2)}/>
            <img src="/images/health symbol.svg" alt="" className="tracks_icon" onMouseEnter={() => handleTrackMouseEnter(2)} onMouseLeave={() => handleTrackMouseLeave(2)}/>
          </div>
          <div className="tracks_sign">
            <img src="/images/interactive media.svg" alt="" className={`tracks_label ${activeTracks.has(3) || animatingTracks.has(3) ? 'active' : ''}`} onMouseEnter={() => handleTrackMouseEnter(3)} onMouseLeave={() => handleTrackMouseLeave(3)}/>
            <img src="/images/media symbol.svg" alt="" className="tracks_icon" onMouseEnter={() => handleTrackMouseEnter(3)} onMouseLeave={() => handleTrackMouseLeave(3)}/>
          </div>
        </div>
      </section>
    </div>
  );
}
