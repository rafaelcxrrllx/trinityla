import '../styling/Blog.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BlogCarousel from '../carousels/BlogCarousel';
import blogCover from '../assets/desktop-cards/blog-cover.svg';

function Blog() {

return (

    <motion.div
    initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
    animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
    transition={{ duration: 1 }}>
    <Nav/>
    <motion.div
    initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
    animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
    transition={{ duration: 1 }}>
       
        <p className='title'>
            Blog 
        </p>
    </motion.div>
    <BlogCarousel/>
    <motion.div className="desktop-cover"
    initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
    animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
    transition={{ duration: 1 }}>
        <img src={blogCover} />
    </motion.div>
      
    <motion.div
    initial={{ y: '1vw', opacity: 0 }} // Initial opacity set to 0
    animate={{ y: 0, opacity:  1 }} // Animate opacity to 1
    transition={{ duration: 1 }}>
        <div className='blog-main-container'>
            
            
           
            <p>
                A collection of entries with both research and findings that can liberate humanity, and emotional baggage I can no longer carry. 
                 Enjoy. 
            </p>

            <Link id='item-link' to="/blog/theantichrist">
                <div className='blog-container'>
                    <div className='chapter-container'>
                    <p>
                        VI
                    </p>
                    </div>
                    <h2>
                       The Anti-Christ
                    </h2>
                    <p>
                        4 July, 2024
                    </p>
                </div>
            </Link>

            <Link id='item-link' to="/blog/cellsaltsintro">
                <div className='blog-container'>
                    <div className='chapter-container'>
                    <p>
                        V
                    </p>
                    </div>
                    <h2>
                        The Cell Salts of Salvation
                    </h2>
                    <p>
                        22 June, 2024
                    </p>
                </div>
            </Link>

            <Link id='item-link' to="/blog/theholymountain">
                <div className='blog-container'>
                    <div className='chapter-container'>
                    <p>
                        IV
                    </p>
                    </div>
                    <h2>
                        The Holy Mountain
                    </h2>
                    <p>
                        20 June, 2024
                    </p>
                </div>
            </Link>

            <Link id='item-link' to="/blog/fullmetal">
                <div className='blog-container'>
                    <div className='chapter-container'>
                    <p>
                        III
                    </p>
                    </div>
                    <h2>
                        The Law of Equivalent Exchange
                    </h2>
                    <p>
                        16 June, 2024
                    </p>
                </div>
            </Link>

            <Link id='item-link' to="/blog/mercury">
                <div className='blog-container'>
                    <div className='chapter-container'>
                    <p>
                        II
                    </p>
                    </div>
                    <h2>
                        The Messenger of the Gods
                    </h2>
                    <p>
                        12 June, 2024
                    </p>
                </div>
            </Link>

            
            <Link id='item-link' to="/blog/genesis">
                <div className='blog-container'>
                    <div className='chapter-container'>
                    <p>
                        I
                    </p>
                    </div>
                    <h2>
                        Genesis
                    </h2>
                    <p>
                        11 June, 2024
                    </p>
                </div>
            </Link>
           
            
            
            
            
            
        </div>
    </motion.div>
    <Footer/>
    </motion.div>
  );
}

export default Blog;
