
// Global Styling
import './styling/Nav.css';

// Local Styling
import './styling/Nav.css';

// Components
import React from 'react';

// Assets
import logo from './assets/logo.svg'
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-emblem">
      <Link className='landing-page-link' to="/home"> <img id="emblem" src={logo} alt="emblem of trinity la"/> </Link>
      </div>
      <div className="nav-menu">
        <Link id='landing-page-link' className="hover-underline" to="/shop"> Shop </Link>
        <Link id='landing-page-link' className="hover-underline" to="/contact"> Contact </Link>
        <Link id='landing-page-link' className="hover-underline" to="/about"> About </Link>
      </div>
     
    </nav>
  );
}

export default Nav;
