import '../styling/Blog.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import illuminated from '../assets/illuminated.jpg'


function Blog() {

return (

    <div>
    <Nav/>
    <motion.div
    initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
    animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
    transition={{ duration: 1 }}>
       
        <p className='title'>
            Blog 
        </p>
    </motion.div>

    <motion.div
    initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
    animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
    transition={{ duration: 1 }}>
        <div className='blog-main-container'>
            <h1 id='title'>
                Here Lies the Unspoke Gospel
            </h1>
            <div className='blog-img'>
                <img src={illuminated}  alt="zodiac wheel"/>
                <p>
                    St. Jerome in His Study, 1514
                </p>
            </div>
            <p>
                A collection of entries with both research and findings that can liberate humanity, and emotional baggage I can no longer carry. 
                 Enjoy. 
            </p>
            
            <Link id='item-link' to="/blog/genesis">
                <div className='blog-container'>
                    <div className='chapter-container'>
                    <p>
                        Chapter One
                    </p>
                    </div>
                    <h2>
                        Genesis: The Beginning and The End
                    </h2>
                    <p>
                        11 June, 2024
                    </p>
                </div>
            </Link>
            <Link id='item-link' to="/blog/mercury">
                <div className='blog-container'>
                    <div className='chapter-container'>
                    <p>
                        Chapter Two
                    </p>
                    </div>
                    <h2>
                        Mercury: The Messenger of the Gods
                    </h2>
                    <p>
                        12 June, 2024
                    </p>
                </div>
            </Link>
            
        </div>
    </motion.div>
    <Footer/>
    </div>
  );
}

export default Blog;
