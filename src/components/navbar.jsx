import React, { useState, useEffect } from 'react';
import NavbarSVG from '../assets/navbar.svg';
import ButtonSVG from '../assets/applyButton.svg';

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY < lastScrollY) {
        setShow(true);  // scrolling up
      } else {
        setShow(false); // scrolling down
      }
      setLastScrollY(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleClick = () => {
    console.log('Apply button clicked!');
    // add navigation logic here
  };

  return (
    <div
      className={`fixed top-0 right-0 w-auto transition-transform duration-300 z-50 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex flex-col items-center">
        <img src={NavbarSVG} className="w-full" alt="Navbar background" />
        <div className="mt-[-52px]"> {/* adjust spacing if needed */}
          <button onClick={handleClick}>
            <img src={ButtonSVG} className="w-12 h-12" alt="Apply button" />
          </button>
        </div>
      </div>
    </div>
  );
}
