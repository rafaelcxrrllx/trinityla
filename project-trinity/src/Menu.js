import React, { useState, useEffect } from 'react';
import './Menu.css'; // Assuming you have a CSS file for the styles
import { motion } from 'framer-motion';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 1024) {
      setMenuOpen(false);
    }
    setIsMobile(window.innerWidth <= 1024);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className="hamburger-container" onClick={handleToggleMenu}>
        <ul className="hamburger">
          <li className={menuOpen ? 'rot45deg' : ''}></li>
          <li className={menuOpen ? 'rot-45deg' : ''}></li>
          <li className={menuOpen ? 'hidden' : ''}></li>
        </ul>
      </div>
      <motion.div 
        id="menu"
        initial={{ height: 0, opacity: 0 }}
        animate={menuOpen && isMobile ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}>
        {/* Menu content goes here */}
        <ul className="hamburger-menu">
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Menu;
