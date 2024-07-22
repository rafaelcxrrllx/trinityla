// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Shop.css'

// Components
import React, { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import {motion} from 'framer-motion'

import MasonryLayout from '../components/MasonryLayout';
import beemer from '../assets/actOne/beemer.jpg';
import divinefeminine from '../assets/actOne/divinefeminine.jpg';
import e46 from '../assets/actOne/e46.jpg';
import sun from '../assets/actOne/sun.jpg';
import luna from '../assets/actOne/luna.jpg';
import mirror from '../assets/actOne/mirror.jpg';
import stars from '../assets/actOne/stars.jpg';
import virtues from '../assets/actOne/virtues.jpg';
import mountain from '../assets/actOne/mountain.jpg';
import rainbow from '../assets/actOne/rainbow.jpg';
import mother from '../assets/actOne/mother.jpg';
import rainbowTwo from '../assets/actOne/rainbowTwo.jpg';
import vette from '../assets/actOne/vette.jpg';
import zmlk from '../assets/actOne/ZMLK.jpg';


function VolumeOne() {


    const items = [
        { id: 1, src: sun, alt: '1' },
        { id: 2, src: luna, alt: '2' },
        { id: 12, src: rainbowTwo, alt: '12' },
        { id: 3, src: beemer, alt: '3' },
        { id: 4, src: stars, alt: '4' },
        { id: 5, src: divinefeminine, alt: '5' },
        { id: 9, src: mountain, alt: '9' },
        { id: 6, src: e46, alt: '6' },
        { id: 7, src: mirror, alt: '7' },
        { id: 10, src: rainbow, alt: '10' },
        { id: 8, src: virtues, alt: '8' },
        { id: 11, src: mother, alt: '11' },
        { id: 13, src: vette, alt: '13' },
        { id: 14, src: zmlk, alt: '14' },






        // Add more items as needed
      ];

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

    <MasonryLayout items={items} />

      
      
      </motion.div>
    <Footer/>
    </div>
  );
}

export default VolumeOne;
