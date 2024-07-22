// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Collections.css'

// Components
import React, { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';

import volOne from '../assets/actOne/volOne.jpg';


function Collections() {

  

  return (

    <div className='home-container'>
    <Nav/>
    <motion.div
    initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
    animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
    transition={{ duration: 1 }}>
    <p className='title'>
      Collections
    </p>

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
