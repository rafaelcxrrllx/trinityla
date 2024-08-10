import React, { useState } from 'react';
import '../styling/GradientText.css';

const GradientText = ({ letter }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setTimeout(() => {
      setIsHovered(false);
    }, 3000); // Fades out after 3 seconds
  };

  return (
    <span
      className="letter"
      onMouseEnter={handleMouseEnter}
      style={{
        '--gradient-opacity': isHovered ? 1 : 0,
      }}
    >
      {letter}
    </span>
  );
};

export default GradientText;