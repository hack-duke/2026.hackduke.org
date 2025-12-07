import './IntroSection.css';
import { useEffect, useRef, useState } from 'react';

export default function IntroSection() {
  const [canFall, setCanFall] = useState(false);
  const canRef = useRef(null);

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

  return (
    <div className="intro-container">
      <section className="down1">
        <img src="/images/date and about.svg" alt="" className="down1-dateAbout"/>
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
      </section>
    </div>
  );
}
