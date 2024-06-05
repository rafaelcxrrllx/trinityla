import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styling/CarouselSlide.css'; // Optional: your custom styles
import heartofgod from './assets/items/shirt1-front.svg';
import shirt from './assets/shirt-size.jpeg';


const CarouselSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 14000,
    arrows: true
  };

  return (
    <div className="carouselslide-container">
      <Slider {...settings}>
        <div>
          <img src={heartofgod} alt="Image 1" />
        </div>
        <div>
          <img src={heartofgod} alt="Image 2" />
        </div>
        <div>
          <img src={heartofgod} alt="Image 3" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default CarouselSlide;
