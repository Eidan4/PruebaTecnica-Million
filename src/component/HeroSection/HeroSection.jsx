import React from "react";
import useTranslation from "../../hooks/useTranslation"; // Importa el hook para la traducción
import "./HeroSection.css";
import WaveSVG from "../WaveSVG/WaveSVG";

const HeroSection = () => {
  const { translation } = useTranslation(); // Obtiene las traducciones del contexto

  return (
    <>
      <div className="hero-container bg-transparent">
        <h1 className="hero-title">
          {translation.heroSection.title}{" "}
          <span className="highlight">{translation.heroSection.highlight}</span>
        </h1>
        <p className="hero-description">{translation.heroSection.subtitle}</p>
        <button className="hero-button">{translation.heroSection.button}</button>
      </div>
      <WaveSVG />
    </>
  );
};

export default HeroSection;