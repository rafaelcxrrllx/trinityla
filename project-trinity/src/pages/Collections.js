// Global Styling
import '../styling/styles.css'

// Local Styling
import '../styling/Shop.css'

// Components
import React, { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import {motion} from 'framer-motion'

// Assets
import HEARTOFGODFRONT from '../assets/items/heartofgod-front.svg'
import HEARTOFGODBACK from '../assets/items/heartofgod-back.svg'

import LOVELYBONESFRONT from '../assets/items/lovelybones-front.svg'
import LOVELYBONESBACK from '../assets/items/lovelybones-back.svg'

import TRINITYFRONT from '../assets/items/trinity-front.svg'
import TRINITYBACK from '../assets/items/trinity-back.svg'

import GOLDENFRONT from '../assets/items/staygolden-front.svg'
import GOLDENBACK from '../assets/items/staygolden-back.svg'

import ENERGYFRONT from '../assets/items/energy-front.svg'
import ENERGYBACK from '../assets/items/energy-back.svg'

import EMBLEMFRONT from '../assets/items/emblem-front.svg'
import EMBLEMBACK from '../assets/items/emblem-back.svg'

import EMFONE from '../assets/items/emf-one.png'
import EMFTWO from '../assets/items/emf-two.png'


import stars from '../assets/stars.svg'
import { Link } from 'react-router-dom';


function Collections() {


    const [HOGSRC, setHogSrc] = useState(HEARTOFGODFRONT);
    const [LBSRC, setLBSrc] = useState(LOVELYBONESFRONT);
    const [TRISRC, setTRISrc] = useState(TRINITYFRONT);
    const [GLDSRC, setGLDSrc] = useState(GOLDENFRONT);
    const [ENGSRC, setENGSrc] = useState(ENERGYFRONT);
    const [EMSRC, setEMSrc] = useState(EMBLEMFRONT);
    const [EMFSRC, setEMFSrc] = useState(EMFONE);

    const items = [
        { id: 1, src: 'https://via.placeholder.com/300', alt: 'Placeholder 1' },
        { id: 2, src: 'https://via.placeholder.com/400', alt: 'Placeholder 2' },
        { id: 3, src: 'https://via.placeholder.com/500', alt: 'Placeholder 3' },
        { id: 4, src: 'https://via.placeholder.com/600', alt: 'Placeholder 4' },
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
    <div className='items'>
    <Link id='item-link' to="/collections/vol.1">
          <div className='item'>
            <div className='shop-item-img'>
            <img
            src={EMFSRC}
            alt="hover"
            // onMouseEnter={() => setEMFSrc(EMFTWO)}
            // onMouseLeave={() => setEMFSrc(EMFONE)}
            className="hover-image"/>
            </div>
          </div>
        </Link>
    </div>

      </motion.div>
    <Footer/>
    </div>
  );
}

export default Collections;
