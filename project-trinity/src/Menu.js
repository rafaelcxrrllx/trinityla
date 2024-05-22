// Global Styling
import './styling/styles.css'

// Local Styling
import './styling/Menu.css'

// Components
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="hamburger-container" onClick={handleToggleMenu}>
        <motion.ul 
          
            className="hamburger">
          <motion.li 
             animate={{ x: menuOpen ? 11: 0, y: menuOpen ? 5: 0, rotate: menuOpen ? 45: 0}}
             transition={{ duration: 0 }}
            ></motion.li>
          <motion.li 
          animate={{ x: menuOpen ? -11: 0, y: menuOpen ? -5: 0, rotate: menuOpen ? -45: 0}}
          transition={{ duration: 0 }}
            ></motion.li>
          <motion.li ></motion.li>
        </motion.ul>
      </div>
      <motion.div 
        id="menu"
        initial={{ height: 0, opacity: 0 }}
        animate={menuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: .3 }}
        style={{ overflow: 'hidden' }}>
        {/* Menu content goes here */}
        <ul className="hamburger-menu">
          <li><Link className='landing-page-link' to="/shop"> Shop </Link></li>
          <li><Link className='landing-page-link' to="/contact"> Contact </Link></li>
          <li><Link className='landing-page-link' to="/about"> About </Link></li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Menu;
