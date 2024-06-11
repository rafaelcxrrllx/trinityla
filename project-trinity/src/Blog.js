import './styling/Blog.css';
import Nav from './Nav';
import Footer from './Footer';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


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
        <div className='blog-main-container'>
            <h1 id='title'>
                Here Lies the Unspoke Gospel
            </h1>

            <div className='blog-container'>
                <div className='chapter-container'>
                <p>
                    Chapter One
                </p>
                </div>
                <h2>
                    Genesis
                </h2>
               
                <p>
                    11 June, 2024
                </p>
            </div>
            
        </div>

   

    <Footer/>
    </div>

  );
}

export default Blog;
