// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Home.css'
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import GradientText from './GradientText';

function ReleaseDate() {


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

      <section id="black" className='blue-container'>
          <motion.div 
              initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
              animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
              transition={{ duration: 2, delay: 1.5 }}
              className='clouds'>
            <h1 className='question'>
            <span id="no-border" className='rainbow'>9.28.24</span>
            </h1>
          </motion.div>
        </section>
    </div>
    

    
  );
}

export default ReleaseDate;
