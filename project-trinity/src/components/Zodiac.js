import React, { useState } from 'react';
import "../styling/Zodiac.css"
import aries from '../assets/zodiacs/aries.svg'
import ariesdesktop from '../assets/zodiacs/cards/aries-card-desktop.svg'
import ariesCard from '../assets/zodiacs/cards/aries-card.svg'
import taurusdesktop from '../assets/zodiacs/cards/taurus-card-desktop.svg'
import taurusCard from '../assets/zodiacs/cards/taurus-card.svg'
import taurus from '../assets/zodiacs/taurus.svg'
import gemini from '../assets/zodiacs/gemini.svg'
import cancer from '../assets/zodiacs/cancer.svg'
import leo from '../assets/zodiacs/leo.svg'
import virgo from '../assets/zodiacs/virgo.svg'
import libra from '../assets/zodiacs/libra.svg'
import scorpio from '../assets/zodiacs/scorpio.svg'
import sagittarius from '../assets/zodiacs/sagittarius.svg'
import capricorn from '../assets/zodiacs/capricorn.svg'
import aquarius from '../assets/zodiacs/aquarius.svg'
import pisces from '../assets/zodiacs/pisces.svg'
import man from '../assets/zodiacs/man.svg'
import { motion } from 'framer-motion';

function Zodiac() {

  const [visibleDiv, setVisibleDiv] = useState(null);

  // Function to handle Aries click
  const handleAriesClick = () => {
    setVisibleDiv(visibleDiv === 'Aries' ? null : 'Aries');
  };

  // Function to handle Taurus click
  const handleTaurusClick = () => {
    setVisibleDiv(visibleDiv === 'Taurus' ? null : 'Taurus');
  };

    return (
      <div className='zodiac-main-container'>
        

        {visibleDiv === 'Aries' && (
        <motion.div 
          style={{ margin: '0px', padding: '20px' }}
          initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
          animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
          transition={{ duration: 1 }}>
          <img className="desktop-card" src={ariesdesktop} alt="aries description" />
          <img className="card" src={ariesCard} alt="aries description" />

        </motion.div>
      )}
      {visibleDiv === 'Taurus' && (
        <motion.div 
          initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
          animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
          transition={{ duration: 1 }}
          style={{ margin: '0px', padding: '20px' }}>
          <img className="desktop-card" src={taurusdesktop} alt="taurus description" />
          <img className="card" src={taurusCard} alt="taurus description" />

        </motion.div>
      )}
     
      <div className='zodiac-wheel-container'>
        
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 144, repeat: Infinity, ease: 'linear' }}
          class="zodiac-wheel">
          <div onClick={handleAriesClick} class="slice aries"><span><img  src={aries} alt="aries"/></span></div>
          <div onClick={handleTaurusClick} class="slice taurus"><span><img src={taurus} alt="taurus"/></span></div>
          <div class="slice gemini"><span><img src={gemini} alt="gemini"/></span></div>
          <div class="slice cancer"><span><img src={cancer} alt="cancer"/></span></div>
          <div class="slice leo"><span><img src={leo} alt="leo"/></span></div>
          <div class="slice virgo"><span><img src={virgo} alt="virgo"/></span></div>
          <div class="slice libra"><span><img src={libra} alt="libra"/></span></div>
          <div class="slice scorpio"><span><img src={scorpio} alt="scorpio"/></span></div>
          <div class="slice sagittarius"><span><img src={sagittarius} alt="sagittarius"/></span></div>
          <div class="slice capricorn"><span><img src={capricorn} alt="capricorn"/></span></div>
          <div class="slice aquarius"><span><img src={aquarius} alt="aquarius"/></span></div>
          <div class="slice pisces"><span><img src={pisces} alt="pisces"/></span></div>
        </motion.div>
      </div>
      

    
      </div>
		

    );
}

export default Zodiac;
