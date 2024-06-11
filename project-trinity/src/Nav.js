
// Global Styling
import './styling/styles.css';

// Local Styling
import './styling/Nav.css';

// Components
import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';

// Assets
import logo from './assets/logo.svg'
import logoDark from './assets/logo-dark.svg'

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Menu from './Menu';
import sunImg from './assets/icons/sun.svg';  // Path to your sun image
import moonImg from './assets/icons/moon.svg'; // Path to your moon image

function Nav() {


const [menuOpen, setMenuOpen] = useState(false);
const { theme, toggleTheme } = useTheme();

const handleToggleMenu = () => {
  setMenuOpen(!menuOpen);
};


  return (

    <nav  className={`navbar ${theme}`}>
      <div className="navbar-emblem">
        <Link className='landing-page-link' to="/home"> 
          <img id="emblem" src={theme === 'light' ? logo : logoDark} 
          alt={theme === 'light' ? 'Moon' : 'Sun'}/>
        </Link>
        <motion.div 
        id="menu"
        initial={{ height: 0, opacity: 0 }}
        animate={menuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: .3 }}
        style={{ overflow: 'hidden', positio: 'absolute' }}>
        <ul className="hamburger-menu">
          <li  className={`link ${theme}`}><Link className='landing-page-link' to="/shop"> Shop </Link></li>
          <li><Link className='landing-page-link' to="/blog"> Blog </Link></li>
          <li><Link className='landing-page-link' to="/contact"> Contact </Link></li>
          <li><Link className='landing-page-link' to="/about"> About </Link></li> 
        </ul>
      </motion.div>
      </div>

      <div className="nav-menu">
        <div>   
          <button id="toggle" className="btn" onClick={toggleTheme}>
              <img 
                  src={theme === 'light' ? moonImg : sunImg} 
                  alt={theme === 'light' ? 'Moon' : 'Sun'} 
                  className="theme-icon"
              />
          </button>
        </div>
        <Link id='landing-page-link' className="hover-underline" to="/shop"> Shop </Link>
        <Link id='landing-page-link' className="hover-underline" to="/blog"> Blog </Link>
        <Link id='landing-page-link' className="hover-underline" to="/contact"> Contact </Link>
        <Link id='landing-page-link' className="hover-underline" to="/about"> About </Link>
      </div>
      <div className='menu-container'>
        <div>
          <div className="hamburger-container" onClick={handleToggleMenu}>
            <motion.ul 
            className="hamburger">
              <motion.li 
                animate={{  y: menuOpen ? 5: 0, rotate: menuOpen ? 40: 0}}
                transition={{ duration: 0 }}></motion.li>
              <motion.li 
                animate={{y: menuOpen ? -5: 0, rotate: menuOpen ? -40: 0}}
                transition={{ duration: 0 }}></motion.li>
              <motion.li 
              animate={{ opacity: menuOpen ? 0: 1 }}
              transition={{ duration: 0 }}>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
