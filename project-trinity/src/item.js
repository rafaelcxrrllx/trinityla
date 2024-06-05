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
import shirt from './assets/shirt-size.jpeg';
import CarouselSlide from './CarouselSlide';


const images = [
    heartofgod,
    heartofgod,
  ];

function Item() {

  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  const [isShipVisible, setIsShipVisible] = useState(false);

  const toggleShip = () => {
    setIsShipVisible(!isShipVisible);
  };

  const [isSizeVisible, setIsSizeVisible] = useState(false);

  const toggleSize = () => {
    setIsSizeVisible(!isSizeVisible);
  };

  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div>
        <Nav/>
        <div class="container">
          <div className='box'>
            <CarouselSlide/>
          </div>
        <div id="item-description" className='box'>
        <div className='item-description'>
            <p>
                HEART OF GOD TEE
            </p>
            <p>
                $45
            </p>
        </div>
        <div className='item-description'>
            <p>
                WHITE
            </p>
           
        </div>
        <div id="size" className='item-description'>
        <p
        className={`size ${selectedSize === 'S' ? 'selected' : ''}`}
        onClick={() => handleSizeClick('S')}
      >
        S
      </p>
      <p
        className={`size ${selectedSize === 'M' ? 'selected' : ''}`}
        onClick={() => handleSizeClick('M')}
      >
        M
      </p>
      <p
        className={`size ${selectedSize === 'L' ? 'selected' : ''}`}
        onClick={() => handleSizeClick('L')}
      >
        L
      </p>
      <p
        className={`size ${selectedSize === 'XL' ? 'selected' : ''}`}
        onClick={() => handleSizeClick('XL')}
      >
        XL
      </p>
        </div>
       
        <div id="details" className='item-description'>
            <p onClick={toggleDetails}>
                DETAILS
            </p>
            {isDetailsVisible && (
              <motion.div
              className="menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
                <p>
                Oversized fee in midweight 6.5oz cotton jersey. Features screenprinted graphics. 
            </p>
              <p>
                - Shortsleeve
                <br/>
                - Ribbed Collar
                <br/>
                - Runs large
                <br/>
                - Unisex
                <br/>
                - Material: 100% cotton
                <br/>
                - Imported
              </p>
              </motion.div>
          )}
        </div>

        <div id="details" className='item-description'>
            <p onClick={toggleSize}>
                SIZE GUIDE
            </p>
            {isSizeVisible && (
              <motion.div
              className="menu"
              id="shirt-sizes"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              >
                <p>
                  All measurements are taken across the garment while laid flat.
                </p>
                <p>
                </p>
            <div className='table-container'>

            
              <table class="styled-table">
                <thead>
                  <tr>
                    <th>SIZE (in)</th>
                    <th>S</th>
                    <th>M</th>
                    <th>L</th>
                    <th>XL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>CHEST</td>
                    <td>19.5</td>
                    <td>21.5</td>
                    <td>23.5</td>
                    <td>25.5</td>
                  </tr>
                  <tr>
                    <td>LENGTH</td>
                    <td>28</td>
                    <td>29</td>
                    <td>30</td>
                    <td>31</td>
                  </tr>
                  <tr>
                    <td>SLEEVE</td>
                    <td>9</td>
                    <td>9.5</td>
                    <td>10</td>
                    <td>10.5</td>
                  </tr>
                </tbody>
              </table>

              <div className='shirt-size-container'>
                <img id="shirt-size" src={shirt} alt="shirt measurements"/>
              </div>
            </div>
          </motion.div>
          )}
        </div>

        <div id="details" className='item-description'>
            <p onClick={toggleShip}>
                SHIPPING & RETURNS
            </p>
            {isShipVisible && (
              <motion.div
              className="menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
                <p>
                Standard $7 (3-7 business days)
                </p>
                <p>
                Returns can be made within seven days of delivery. Exclusions apply. See our return guidelines for more details.
                </p>
              
              
              </motion.div>
          )}
        </div>

        <div className='buttons'>
          <button id="AddToBag" class="btn">CHECKOUT</button>
        </div>
        </div>
        </div>

      <Footer/>      
    </div>
  );
};

export default Item;
