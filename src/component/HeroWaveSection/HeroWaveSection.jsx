import React, { useRef } from "react";

import "./HeroWaveSection.css";
import HeroSection from "../HeroSection/HeroSection";
import WaveSVG from "../WaveSVG/WaveSVG";
import Header from "../Header/Header";

const HeroWaveSection = () => {
  const heroWaveRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = heroWaveRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    heroWaveRef.current.style.setProperty("--x", `${x}%`);
    heroWaveRef.current.style.setProperty("--y", `${y}%`);
  };

  return (
    <div
      className="hero-wave-section relative"
      ref={heroWaveRef}
      onMouseMove={handleMouseMove}
    >
      <Header />
      <HeroSection />
      <WaveSVG />
    </div>
  );
};

export default HeroWaveSection;