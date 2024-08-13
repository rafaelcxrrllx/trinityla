// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Home.css'
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import GradientText from './GradientText';
import { Link } from 'react-router-dom';
import TRINITYFRONT from '../assets/items/trinity-front.svg'
import TRINITYBACK from '../assets/items/trinity-back.svg'

function LandingShirt() {


  
  const [TRISRC, setTRISrc] = useState(TRINITYBACK);



  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const sectio2Ref = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }


    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);



  return (
    <section id="landing-item" className='clouds'>
      <div
        ref={sectionRef}
        className={`section ${isVisible ? 'visible' : ''}`}>
        
      <Link id='item-link' to="/shop/trinity">
    
      <motion.div 
        initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
        animate={isVisible ? { y: 0, opacity:  1 }: {y: '7vw', opacity: 0} } // Animate opacity to 1
        transition={{ duration: 1 }}
        className='item'>
        <div className='shop-item-img'>
        <img
        src={TRISRC}
        alt="hover"
        onMouseEnter={() => setTRISrc(TRINITYFRONT)}
        onMouseLeave={() => setTRISrc(TRINITYBACK)}
        className="hover-image"/>
        </div>
      </motion.div>
    </Link>
    </div>
    
  </section>
      
  );
}

export default LandingShirt;
