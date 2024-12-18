import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styling/CarouselSlide.css'; // Optional: your custom styles
import TRINITYFRONT from '../assets/items/holytrinityfront.svg';
import TRINITYBACK from '../assets/items/holytrinityback.svg';
import TRINITYFRONT1 from '../assets/items/holytrinityfront-prototype.svg';
import TRINITYBACK2 from '../assets/items/holytrinityback-prototype.svg';
import TRINITYFRONT3 from '../assets/items/holytrinityfront-pink.svg';
import TRINITYBACK4 from '../assets/items/holytrinityback-pink.svg';
const CarouselSlideThree = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 14000,
    arrows: true,
    
    vertical: true, // Add this line to enable vertical scrolling
   

  };







  return (
   
      <div className="carouselslide-container">
        <Slider {...settings}>
          <div>
            <img src={TRINITYFRONT} alt="Image 1" />
          </div>
          <div>
            <img src={TRINITYBACK} alt="Image 2" />
          </div>
          <div>
            <img src={TRINITYFRONT1} alt="Image 1" />
          </div>
          <div>
            <img src={TRINITYBACK2} alt="Image 2" />
          </div>
          <div>
            <img src={TRINITYFRONT3} alt="Image 1" />
          </div>
          <div>
            <img src={TRINITYBACK4} alt="Image 2" />
          </div>
        </Slider>
    </div>
  );
};

export default CarouselSlideThree;
