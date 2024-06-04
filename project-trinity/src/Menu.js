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
             animate={{  y: menuOpen ? 5: 0, rotate: menuOpen ? 40: 0}}
             transition={{ duration: 0 }}
            ></motion.li>
          <motion.li 
          animate={{y: menuOpen ? -5: 0, rotate: menuOpen ? -40: 0}}
          transition={{ duration: 0 }}
            ></motion.li>
          <motion.li 
           animate={{ opacity: menuOpen ? 0: 1 }}
           transition={{ duration: 0 }}
           
           >
            </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};

export default Menu;
