// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Home.css'
import '../styling/bodyshot.css'
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import bodyshot from '../assets/body-shot.jpeg'
import christ from '../assets/christSatan.jpg'

function Introduction() {


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

    <section className='gray-container'>

      <div
        ref={sectionRef}
        className={`section ${isVisible ? 'visible' : ''}`}>
      
        <motion.div 
          initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
          animate={isVisible ? { y: 0, opacity:  1 }: {y: '7vw', opacity: 0} } // Animate opacity to 1
          transition={{ duration: 1 }}
          className='bodyshot'>

          <div className='left-container'>
            <div className='image-container'>
            <motion.img  
              initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
              animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
              transition={{ duration: 2, delay: 1.5 }}
              id="bodyshot" src={bodyshot} alt="image of author"/>
            </div>
            <motion.h1 id="trinityla">
              Trinity <span className='rainbow'>LA</span>
            </motion.h1>
            <h3 id="neo">
              Wake Up Neo...
            </h3>
            <p id='mission'>
              <span className='start-letter'>
                                      I
              </span> am here to spread the gospel truth. The real story that astrology tells, that story concerns the understanding, 
              purification, mastery and perfection of the human body and nothing else. The scriptures are allegories, parables and 
              fables based on the human body, "fearfully and wonderfully made".
            </p>
          </div>

          <div className='right-container'>
            <h3 id="evoking-divinity">
            "Evoking Divinity"
            </h3>
            <div class="crop-container">
              <motion.img  
                initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
                animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
                transition={{ duration: 2, delay: 1.5 }}
                id="christ-satan" src={christ} alt="image of christ and satan"/>
            </div>
          </div>

        </motion.div>

        </div>
    
   </section>
    
  );
}

export default Introduction;
