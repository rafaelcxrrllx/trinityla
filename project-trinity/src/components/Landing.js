// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Home.css'
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import GradientText from './GradientText';

function Landing() {


  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const text = 'trinity';


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
    <div
      ref={sectionRef}
      className={`section ${isVisible ? 'visible' : ''}`}>

    <section id='section1' className='landing-page'>
            <motion.div 
              initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
              animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
              transition={{ duration: 2, delay: 1.5 }}
              className='clouds'>
              {/* <img className='brand-name' src={brandname} alt='trinity'/> */}
              <div className="text-container">
                {text.split(' ').map((letter, index) => (
                  <GradientText key={index} letter={letter} />
                ))}
              </div>
              <div className='slogan'>
                  <h2 class="hero glitch layers" data-text="三位一体"><span>三位一体</span></h2>
              <h1><i>mind </i>body <b>sol</b></h1>
              </div>
            </motion.div>
          </section>
    </div>
    
  );
}

export default Landing;
