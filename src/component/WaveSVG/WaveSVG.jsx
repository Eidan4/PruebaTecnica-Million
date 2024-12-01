import React from "react";
import './WaveSVG.css';

const WaveSVG = ({ fill = "#fefefe", fillOpacity = "1" }) => {
  return (
    <div className="svg-background-container bg-transparent">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 220"
        className="svg-background"
      >
        <path
          fill={fill}
          fillOpacity={fillOpacity}
          d="M0,160L80,138.7C160,117,320,75,480,90.7C640,107,800,181,960,197.3C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </svg>
    </div>
  );
};

export default WaveSVG;