// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Collections.css'

// Components
import React, { useState } from 'react';
import FlourescentNav from '../components/FlourescentNav';
import Footer from '../components/Footer';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import volOne from '../assets/actOne/volOne.jpg';
import lavender from '../assets/lavender.mp4';

function Collections() {

  

  return (

    <div className='home-container'>
    <FlourescentNav/>
    <motion.div
    initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
    animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
    transition={{ duration: 1 }}>
    <div className='middleTitle'>
      <h1 > Collections</h1>
      <p >By 𝖙𝖗𝖎𝖓𝖎𝖙𝖞</p>
    </div>
    <div>
      <VideoPlayer 
        src={lavender}
        type="video/mp4" 
        className="videoCover" 
      />
    </div>
    <br/>
    <br/>
    <br/>
    <Link id='collection-link' to="/collections/vol.1">
          <div className='collection-item'>
            <div className='collection-img'>
            <img
            src={volOne}
            alt="hover"
            className="hover-image"/>
            </div>
          </div>
        </Link>

      </motion.div>
    <Footer/>
    </div>
  );
}

export default Collections;
