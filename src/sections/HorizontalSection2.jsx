import bg from '/images/bg-horizontal.svg';
import table from '/images/table.svg';
import chair from '/images/chair.svg';
import poster2 from '/images/poster-2.svg';
import plantAndPot from '/images/plant-and-pot.svg';
import { useRef, useEffect, useState } from 'react';

export default function HorizontalSection2() {
  const chairRef = useRef(null);
  const [chairMetrics, setChairMetrics] = useState({ left: 0, height: 0, width: 0 });

  useEffect(() => {
    const updateMetrics = () => {
      if (chairRef.current) {
        const rect = chairRef.current.getBoundingClientRect();
        setChairMetrics({
          left: rect.left,
          height: rect.height,
          width: rect.width,
        });
      }
    };

    updateMetrics(); // initial measurement
    window.addEventListener('resize', updateMetrics);
    return () => window.removeEventListener('resize', updateMetrics);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '200vw',
        height: '100%',
        overflow: 'hidden'
      }}
    >

      {/* Background image */}
      <img
        src={bg}
        alt="Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      <img
        src={table}
        alt="Table"
        style={{
          position: 'absolute',
          bottom: '10%',  
          left: '30%',
          width: '70%'
        }}
      />

      <img
        src={poster2}
        alt="Poster of a face"
        style={{
          position: 'absolute',
          top: '5%',
          left: '5%',
          width: '10%',
        }}
      />

      <section className="chair-plant-group">
        <img
          src={chair}
          alt="red chair"
          style={{
            position: 'absolute',
            bottom: 0,
            left: '18%',
            width: '10%',
          }}
        />

        <img
          src={plantAndPot}
          alt="plant in pot"
          style={{
            position: 'absolute',
            bottom: '15%',
            left: '17%',
            width: '15%',
          }}
        />
      </section>

      <img
      src={chair}
      alt="red chair"
      style={{
        position: 'absolute',
        bottom: 0,
        right: '13%',
        width: '10%',
      }}
      />
      

    </div>
  );
}
