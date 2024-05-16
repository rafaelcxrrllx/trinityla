import React, { useState, useEffect } from 'react';
import './Carousel.css';
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'


const Carousel = () => {
  const images = [
   img1,
   img2,
   img3
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            alt={`Slide ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
