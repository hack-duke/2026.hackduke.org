import { useRef, useEffect, useState } from 'react';
import './HorizontalScrollSection.css';

const HorizontalScrollSection = ({ panels, children }) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [containerHeight, setContainerHeight] = useState('200vh');
  const [isFixed, setIsFixed] = useState(false);
  const [isAfter, setIsAfter] = useState(false);

  useEffect(() => {
    const updateMeasurements = () => {
      if (!scrollerRef.current) return;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const scrollerWidth = scrollerRef.current.scrollWidth;
      const maxScrollDistance = Math.max(scrollerWidth - viewportWidth, 0);
      const requiredHeight = maxScrollDistance + viewportHeight;

      setContainerHeight(`${requiredHeight}px`);
    };

    updateMeasurements();
    // Recalculate after first paint and when assets load (prevents 0 scrollWidth)
    requestAnimationFrame(updateMeasurements);
    window.addEventListener('load', updateMeasurements);
    window.addEventListener('resize', updateMeasurements);

    // Observe content size changes (e.g., images loading, dynamic content)
    let ro;
    if ('ResizeObserver' in window && scrollerRef.current) {
      ro = new ResizeObserver(() => updateMeasurements());
      ro.observe(scrollerRef.current);
    }

    return () => {
      window.removeEventListener('load', updateMeasurements);
      window.removeEventListener('resize', updateMeasurements);
      if (ro) ro.disconnect();
    };
  }, [panels?.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !scrollerRef.current) return;

      const container = containerRef.current;
      const scroller = scrollerRef.current;
      const rect = container.getBoundingClientRect();
      const maxScrollDistance = Math.max(scroller.scrollWidth - window.innerWidth, 0);

      // When the section reaches the top and is still in view
      if (rect.top <= 0 && rect.bottom > window.innerHeight) {
        setIsFixed(true);
        setIsAfter(false);
        // Calculate how far through the container we've scrolled (0 to 1)
        const scrollableHeight = Math.max(rect.height - window.innerHeight, 1);
        const scrolled = Math.abs(rect.top);
        const progress = Math.min(scrolled / scrollableHeight, 1);

        setScrollProgress(progress);

        // Calculate horizontal translation
        const translateX = -progress * maxScrollDistance;

        // Apply smooth transform
        scroller.style.transform = `translateX(${translateX}px)`;
      } else if (rect.top > 0) {
        // Before entering section, reset
        setScrollProgress(0);
        scroller.style.transform = 'translateX(0px)';
        setIsFixed(false);
        setIsAfter(false);
      } else if (rect.bottom <= window.innerHeight) {
        // Scrolled past section - lock at final position
        setScrollProgress(1);
        scroller.style.transform = `translateX(${-maxScrollDistance}px)`;
        setIsFixed(false);
        setIsAfter(true);
      }
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [panels?.length]);

  return (
    <div
      ref={containerRef}
      className="horizontal-scroll-container"
      style={{ height: containerHeight }}
    >
      <div className={`horizontal-scroll-sticky${isFixed ? ' is-fixed' : ''}${isAfter ? ' is-after' : ''}`}>
        {/* Progress bar */}
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        <div
          ref={scrollerRef}
          className="horizontal-scroll-content"
          style={panels ? { width: `${panels.length * 100}vw` } : undefined}
        >
          {panels
            ? panels.map((panel, index) => (
                <div
                  key={panel.id}
                  className="horizontal-panel"
                  style={{ backgroundColor: panel.color }}
                >
                  <div className="panel-content">
                    <div className="panel-number">
                      {String(index + 1).padStart(2, '0')}/{String(panels.length).padStart(2, '0')}
                    </div>
                    <div className="panel-emoji">{panel.emoji}</div>
                    <h2 className="panel-title">{panel.title}</h2>
                    <p className="panel-description">{panel.description}</p>
                  </div>
                </div>
              ))
            : children}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
