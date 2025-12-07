import React, { useState } from 'react';
import './ClaudeLanding.css';

// Import all SVG assets from landing folder
import sunsetBg1 from '../assets/landing/sunset bg 1.svg';
import sunsetBg2 from '../assets/landing/sunset bg 2.svg';
import coolSunsetEffect1 from '../assets/landing/cool sunset effect 1.svg';
import coolSunsetEffect2 from '../assets/landing/cool sunset effect 2.svg';
import coolSunsetEffectBehind from '../assets/landing/cool sunset effect - behind.svg';
import yellowishSunsetLeft from '../assets/landing/yellowish sunset effect - left side.svg';
import yellowishSunsetRight from '../assets/landing/yellowish sunset effect - right side.svg';
import concrete from '../assets/landing/concrete .svg';
import clouds from '../assets/landing/clouds.svg';
import buildings from '../assets/landing/buildings.svg';
import bushesBehindTrain from '../assets/landing/bushes behind train.svg';
import powerLine from '../assets/landing/power line.svg';
import train from '../assets/landing/train.svg';
import fence from '../assets/landing/fence.svg';
import bigBush from '../assets/landing/left bush.svg';
import rightBush from '../assets/landing/right bush.svg';
import boxes from '../assets/landing/boxes.svg';
import convenienceStore from '../assets/landing/convenience store -building.svg';
import interior from '../assets/landing/INTERIOR.svg';
import leftDoor from '../assets/landing/LEFT DOOR.svg';
import rightDoor from '../assets/landing/RIGHT DOOR.svg';
import applyNowPoster from '../assets/landing/apply now poster.svg';
import text from '../assets/landing/text.svg';
import trainDoorWindows from '../assets/landing/train door windows.svg';
import openSign from '../assets/landing/open sign.svg';
import cat from '../assets/landing/cat.svg';
import ground from '../assets/landing/ground.svg'
// Sponsor logos
import brightData from '../assets/landing/sponsorlogos/bright data.svg';
import figma from '../assets/landing/sponsorlogos/figma.svg';
import hrt from '../assets/landing/sponsorlogos/hrt.svg';
import iid from '../assets/landing/sponsorlogos/iid.svg';
import roblox from '../assets/landing/sponsorlogos/roblox.svg';
import turbo from '../assets/landing/sponsorlogos/turbo.svg';
import vipplay from '../assets/landing/sponsorlogos/vipplay.svg';

export default function ClaudeLanding() {
  const [doorsOpen, setDoorsOpen] = useState(false);

  const toggleDoors = () => {
    setDoorsOpen(!doorsOpen);
  };

  return (
    <div className="claude-landing-container">
      {/* Sky gradients */}
      <div className="sunset-bg-2"></div>
      <div className="sunset-bg-1"></div>

      {/* Sunset effects */}
      <img src={coolSunsetEffect2} alt="" className="cool-sunset-effect-2" />
      <img src={coolSunsetEffect1} alt="" className="cool-sunset-effect-1" />
      <img src={yellowishSunsetLeft} alt="" className="yellowish-sunset-left" />
      <img src={yellowishSunsetRight} alt="" className="yellowish-sunset-right" />

      {/* Concrete ground */}
      <div className="concrete-ground"></div>

      {/* Clouds */}
      <img src={clouds} alt="" className="clouds" />

      {/* Buildings */}
      <img src={buildings} alt="" className="buildings" />


      {/* Sunset effect behind */}
      <img src={coolSunsetEffectBehind} alt="" className="cool-sunset-behind" />

      {/* Bushes behind train */}
      <img src={bushesBehindTrain} alt="" className="bushes-behind-train" />

      {/* Power lines */}
      <img src={powerLine} alt="" className="power-line" />

      {/* Train */}
      <img src={train} alt="" className="train" />
      <img src={trainDoorWindows} alt="" className="train-door-windows" />

      {/* Fence */}
      <img src={fence} alt="" className="fence" />

      {/* Ground vectors */}
      <img src={ground} alt="" className="ground" />

      {/* Big bush left */}
      <img src={bigBush} alt="" className="big-bush-left" />

      {/* Boxes */}
      <img src={boxes} alt="" className="boxes" />

      {/* Convenience store */}
      <img src={convenienceStore} alt="" className="convenience-store" />

      {/* Interior */}
      <img src={interior} alt="" className="interior" />

      {/* Invisible hover trigger for doors - DESKTOP ONLY - must come before doors in DOM */}
      <div className="doors-hover-trigger"></div>

      {/* Mobile-only click trigger */}
      <div className="doors-mobile-click-trigger" onClick={toggleDoors}></div>

      {/* Doors Container */}
      <div className={`doors-container ${doorsOpen ? 'open' : ''}`}>
        {/* Left Door */}
        <img src={leftDoor} alt="" className="left-door" />

        {/* Right Door */}
        <img src={rightDoor} alt="" className="right-door" />
      </div>

      {/* Apply Now Poster Button */}
      <button className="apply-now-poster" aria-label="Apply Now">
        <img src={applyNowPoster} alt="Apply Now" />
      </button>

      {/* Open sign */}
      <img src={openSign} alt="" className="open-sign" />

      {/* Big bush right */}
      <img src={rightBush} alt="" className="big-bush-right" />

      {/* Cat */}
      <img src={cat} alt="" className="cat" />

      {/* Sponsor Logos Marquee */}
      <div className="sponsor-marquee">
        <div className="sponsor-marquee-track">
          <div className="sponsor-logos">
            <img src={brightData} alt="Bright Data" />
            <img src={figma} alt="Figma" />
            <img src={hrt} alt="HRT" />
            <img src={iid} alt="IID" />
            <img src={roblox} alt="Roblox" />
            <img src={turbo} alt="Turbo" />
            <img src={vipplay} alt="VIPPlay" />
          </div>
          {/* Duplicate for seamless loop */}
          <div className="sponsor-logos">
            <img src={brightData} alt="Bright Data" />
            <img src={figma} alt="Figma" />
            <img src={hrt} alt="HRT" />
            <img src={iid} alt="IID" />
            <img src={roblox} alt="Roblox" />
            <img src={turbo} alt="Turbo" />
            <img src={vipplay} alt="VIPPlay" />
          </div>
        </div>
      </div>
    </div>

  );
}
