// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/ScrollingText.css'
import React, { useEffect, useRef, useState } from 'react';

function ScrollingText() {


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

    

    <div>
      <div>
         
        <div
           ref={sectionRef}
           className={`section ${isVisible ? 'visible' : ''}`}
            id='scroll-container'>
            <div class='scroll' id='scroll-one'>
              <div class='scroll-item'><p>"TO MEASURE YOU BY YOUR SMALLEST DEED IS TO RECKON THE POWER OF THE OCEAN BY THE FRAILTY OF ITS FOAM"</p></div>
              <div class='scroll-item'><p>"TO JUDGE YOU BY YOUR FAILURES IS TO CAST BLAME UPON THE SEASONS FOR THEIR INCONSISTENCY"</p></div>
              <div class='scroll-item'><p>"TO BE WOUNDED BY YOUR OWN UNDERSTANDING OF LOVE; AND TO BLEED WILLINGLY AND JOYFULLY"</p></div>
              <p>Khalil Gibran </p>
            </div>
          <div class='fade'></div>
        </div>
      </div>
    </div>
  );
}

export default ScrollingText;
