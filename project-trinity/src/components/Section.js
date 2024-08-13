// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Home.css'
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
function Section() {


  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

    <section className='blue-container'>
    <div className='clouds'>
      <div
        ref={sectionRef}
        className={`section ${isVisible ? 'visible' : ''}`}>
        <motion.h1 
            className='question' 
            id="Neo"
            initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
            animate={isVisible ? { y: 0, opacity:  1 }: {y: '7vw', opacity: 0} } // Animate opacity to 1
            transition={{ duration: 1 }}>
        wake up, <span className='rainbow'>Neo...</span>
        </motion.h1>
        </div>
 
    </div>
  </section>
    
  );
}

export default Section;
