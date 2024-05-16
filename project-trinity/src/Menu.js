import React, { useState, useEffect } from 'react';
import './styling/Menu.css'; // Assuming you have a CSS file for the styles
import { motion } from 'framer-motion';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="hamburger-container" onClick={handleToggleMenu}>
        <motion.ul 
            animate={menuOpen ? { y: '1vw' } : { y: '0vw' }}
            className="hamburger">
          <li className={menuOpen ? 'rot45deg' : ''}></li>
          <li className={menuOpen ? 'rot-45deg' : ''}></li>
          <li className={menuOpen ? 'hidden' : ''}></li>
        </motion.ul>
      </div>
      <motion.div 
        id="menu"
        initial={{ height: 0, opacity: 0 }}
        animate={menuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}>
        {/* Menu content goes here */}
        <ul className="hamburger-menu">
          <li>Shop</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Menu;
