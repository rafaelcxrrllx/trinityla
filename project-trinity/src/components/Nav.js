
// Global Styling
import '../styling/styles.css';

// Local Styling
import '../styling/Nav.css';
import '../styling/Menu.css';


// Components
import React, { useState, useEffect } from 'react';

// Assets
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Nav() {


const [menuOpen, setMenuOpen] = useState(false);

const handleToggleMenu = () => {
  setMenuOpen(!menuOpen);
};


  return (
    <nav className="navbar">
      <div className="navbar-emblem">
        <Link className='landing-page-link' to="/home"> <img id="emblem" src={logo} alt="emblem of trinity la"/></Link>
        <motion.div 
        id="menu"
        initial={{ height: 0, opacity: 0 }}
        animate={menuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: .3 }}
        style={{ overflow: 'hidden', positio: 'absolute' }}>
        <ul className="hamburger-menu">
          <li><Link className='landing-page-link' to="/shop"> Shop </Link></li>
          <li><Link className='landing-page-link' to="/blog"> Blog </Link></li>
          <li><Link className='landing-page-link' to="/contact"> Contact </Link></li>
          <li><Link className='landing-page-link' to="/about"> About </Link></li> 
        </ul>
      </motion.div>
      </div>
      <div className="nav-menu">
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
