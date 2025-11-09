import React from 'react';
import './navbar.css';
import navbarBg from '../assets/navbarBg.svg';
import aboutNavbar from '../assets/aboutNavbar.svg';
import faqsNavbar from '../assets/faqsNavbar.svg';
import scheduleNavbar from '../assets/scheduleNavbar.svg';
import sponsorsNavbar from '../assets/sponsorsNavbar.svg';
import tracksNavbar from '../assets/tracksNavbar.svg';
import homeButton from '../assets/homeButton.svg';

export default function Navbar() {
  return (
    <div className="navbar-container">
      <img src={navbarBg} alt="Navbar Background" className="navbar-bg" />
      <div className="navbar-buttons">
        <button><img src={homeButton} alt="Home" /></button>
        <button><img src={aboutNavbar} alt="About" /></button>
        <button><img src={tracksNavbar} alt="Tracks" /></button>
        <button><img src={scheduleNavbar} alt="Schedule" /></button>
        <button><img src={faqsNavbar} alt="FAQs" /></button>
        <button><img src={sponsorsNavbar} alt="Sponsors" /></button>
      </div>
    </div>
  );
}
