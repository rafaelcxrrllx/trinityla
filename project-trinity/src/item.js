// Global Styling
import './styling/styles.css'

// Local Styling
import './styling/Item.css'

// Components
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Menu from './Menu';
import Footer from './Footer';
import heartofgod from './assets/items/shirt1-front.svg';

const images = [
    heartofgod,
    heartofgod,
  ];

function Item() {

  return (
    <div>
        <Nav/>
        <Menu/>
        <div className='item-container'>
          <div className='item-img'>
            <img src={heartofgod} alt="an image of a shirt with a heart design"/>
          </div>
        </div>
        <div className='item-description'>
            <p>
                HEART OF GOD TEE
            </p>
            <p>
                $45
            </p>
        </div>
        <Footer/>
            
    </div>
  );
};

export default Item;
