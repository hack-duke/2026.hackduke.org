import './IntroSection.css';
import { useEffect, useRef, useState } from 'react';

export default function IntroSection() {
  const [canFall, setCanFall] = useState(false);
  const [activeTracks, setActiveTracks] = useState(new Set());
  const [peekingTracks, setPeekingTracks] = useState(new Set());
  const [isIdle, setIsIdle] = useState(true);
  const canRef = useRef(null);
  const timeoutRef = useRef({});
  let TRACK_SLIDE_DELAY = 1000; //change this to change how fast track slides back in
  
  useEffect(() => {
    setIsIdle(activeTracks.size === 0);
  }, [activeTracks]);

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

  // hovering over a track label causes it to be active (slide into view)
  const handleTrackMouseEnter = (trackIndex) => {
    setPeekingTracks(new Set());
    setIsIdle(false);

  if (timeoutRef.current[trackIndex]) {
    clearTimeout(timeoutRef.current[trackIndex]);
  }
  
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
    }, TRACK_SLIDE_DELAY);
  };

  // function that makes the tracks peek out a little one by one 
 const runPeekSequence = () => {
  const timeouts = [];
  const PEEK_DURATION = 600;
  const STAGGER = 90;

  setPeekingTracks(new Set());

  for (let i = 0; i < 4; i++) {
    const start = i * STAGGER;

    timeouts.push(
      setTimeout(() => {
        setPeekingTracks(prev => new Set(prev).add(i));
      }, start)
    );

    timeouts.push(
      setTimeout(() => {
        setPeekingTracks(prev => {
          const ns = new Set(prev);
          ns.delete(i);
          return ns;
        });
      }, start + PEEK_DURATION)
    );
  }

  return timeouts;
};


  //if user not hovering over any tracks, play peeking animation to draw their eye to it
  useEffect(() => {
    if (!isIdle) return;

    let peekTimeouts = [];
    let intervalId;

    const startPeekLoop = () => {
      peekTimeouts = runPeekSequence();
    };

    // Run immediately
    startPeekLoop();

    // Then repeat every 3s
    intervalId = setInterval(startPeekLoop, 3000);

    return () => {
      clearInterval(intervalId);
      peekTimeouts.forEach(clearTimeout);
      setPeekingTracks(new Set());
    };
  }, [isIdle]);

  return (
    <div className="intro-container">
      <section className="down1">
        <img id="about" alt="" className="down1-dateAbout" src="/images/date and about.svg" />
        <img src="/images/date and about.svg" alt="" className="down1-dateAbout"/>
        <img src="/images/date.svg" alt="" className="down1-date"/>
        <img src="/images/ceiling.svg" alt="" className="down1-ceiling"/>
        <img src="/images/big sign.svg" alt="" className="down1-big_sign"/>
        <img src="/images/left sign.svg" alt="" className="down1-left_sign"/>
        <div className="down1-left_side">
          <img src="/images/Lucky Cat.svg" alt="" className="down1-lucky_cat"/>
          <img src="/images/left shelf and assets.svg" alt="" className="down1-left_shelf"/>
          <img id="tracks" src="/images/lower left.svg" alt="" className="down1-lower_left"/>
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
            <img src="/images/sustainability.svg" alt="" className={`tracks_label ${activeTracks.has(0) ? 'active' : peekingTracks.has(0) ? 'peek' : ''}`} onMouseEnter={() => handleTrackMouseEnter(0)} onMouseLeave={() => handleTrackMouseLeave(0)}/>
            
            {/* slide the track label out if 1) user hovers over it or 2) we're showing users to click on the track icon */}
            <img src="/images/sustainability symbol.svg" alt="" className="tracks_icon" onMouseEnter={() => handleTrackMouseEnter(0)} onMouseLeave={() => handleTrackMouseLeave(0)}/>
          </div>
          <div className="tracks_sign">
            <img src="/images/finance.svg" alt="" className={`tracks_label ${activeTracks.has(1) ? 'active' : peekingTracks.has(1) ? 'peek' : ''}`} onMouseEnter={() => handleTrackMouseEnter(1)} onMouseLeave={() => handleTrackMouseLeave(1)}/>
            <img src="/images/finance symbol.svg" alt="" className="tracks_icon" onMouseEnter={() => handleTrackMouseEnter(1)} onMouseLeave={() => handleTrackMouseLeave(1)}/>
          </div>
          <div className="tracks_sign">
            <img src="/images/health.svg" alt="" className={`tracks_label ${activeTracks.has(2) ? 'active' : peekingTracks.has(2) ? 'peek' : ''}`} onMouseEnter={() => handleTrackMouseEnter(2)} onMouseLeave={() => handleTrackMouseLeave(2)}/>
            <img src="/images/health symbol.svg" alt="" className="tracks_icon" onMouseEnter={() => handleTrackMouseEnter(2)} onMouseLeave={() => handleTrackMouseLeave(2)}/>
          </div>
          <div className="tracks_sign">
            <img src="/images/interactive media.svg" alt="" className={`tracks_label ${activeTracks.has(3) ? 'active' : peekingTracks.has(3) ? 'peek' : ''}`} onMouseEnter={() => handleTrackMouseEnter(3)} onMouseLeave={() => handleTrackMouseLeave(3)}/>
            <img src="/images/media symbol.svg" alt="" className="tracks_icon" onMouseEnter={() => handleTrackMouseEnter(3)} onMouseLeave={() => handleTrackMouseLeave(3)}/>
          </div>
        </div>
      </section>
    </div>
  );
}
