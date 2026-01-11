import React from 'react';
import './navbar.css';
import navbarBg from '../assets/navbarBg.svg';
import aboutNavbar from '../assets/aboutNavbar.svg';
import faqsNavbar from '../assets/faqsNavbar.svg';
import scheduleNavbar from '../assets/scheduleNavbar.svg';
import sponsorsNavbar from '../assets/sponsorsNavbar.svg';
import tracksNavbar from '../assets/tracksNavbar.svg';
import homeButton from '../assets/homeButton.svg';
import ApplyButton from './applyButton';

export function NavbarButton({imageSrc, alt, url = '#', className = ''}){
  return (
    <a href={url} className={`navbar-button ${className}`}>
      <img className='navbar-button-img' src={imageSrc} alt={alt} />
    </a>
  )
}

export default function Navbar({ className = '' }) {
  return (
    <div className={`navbar-container ${className}`}>
      <img src={navbarBg} alt="Navbar Background" className="navbar-bg" />
      <div className="navbar-buttons">
        <NavbarButton imageSrc={homeButton} alt="Home" url="/" className='home-button'/>
        <NavbarButton imageSrc={aboutNavbar} alt="About" url="#about" />
        <NavbarButton imageSrc={tracksNavbar} alt="Tracks" url="#tracks" />
        <NavbarButton imageSrc={scheduleNavbar} alt="Schedule" url="#schedule" />
        <NavbarButton imageSrc={faqsNavbar} alt="FAQs" url="#faqs" />
        <NavbarButton imageSrc={sponsorsNavbar} alt="Sponsors" url="#sponsors" />
      </div>
      <ApplyButton/>
    </div>
  );
}
